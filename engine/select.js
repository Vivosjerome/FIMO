(function () {
  const F = (window.FIMO = window.FIMO || {});

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function excludeObsolete(list) {
    return list.filter(function (q) {
      return q.auditStatus !== "obsolete";
    });
  }

  F.shuffle = shuffle;

  F.select = {
    mixed: function (n, opts) {
      opts = opts || {};
      let pool = excludeObsolete(F.bank.usable());
      const seen = F.progress.seenIds();
      const errors = F.progress.everFailedIds();
      if (opts.pool === "unseen") {
        pool = pool.filter(function (q) {
          return seen.indexOf(q.id) === -1;
        });
      } else if (opts.pool === "errors") {
        pool = pool.filter(function (q) {
          return errors.indexOf(q.id) !== -1;
        });
      } else if (opts.pool === "weak") {
        const weak = (F.recommend.weakFiches() || []).map(function (w) {
          return w.id;
        });
        if (weak.length) {
          pool = pool.filter(function (q) {
            return weak.indexOf(q.relatedFiche) !== -1;
          });
        }
      }
      if (!pool.length) pool = excludeObsolete(F.bank.usable());
      let list;
      if (opts.pool === "random" || !opts.pool) {
        const gen = F.generate.fromTemplate("drive-time", Math.min(6, Math.max(1, Math.round(n * 0.12))));
        list = shuffle(gen.length ? pool.concat(gen) : pool);
      } else {
        list = shuffle(pool);
      }
      if (opts.withPma) {
        const pma = F.generate.fromTemplate("pma", Math.max(2, Math.round(n * 0.15)));
        list = shuffle(list.concat(pma));
      }
      return list.slice(0, n);
    },

    byCategory: function (id) {
      let list = excludeObsolete(F.bank.byCategory(id));
      if (id === "temps-conduite" || id === "pauses") {
        list = list.concat(
          F.generate.fromTemplate("drive-time", 8).filter(function (q) {
            return q.category === id;
          })
        );
      }
      return shuffle(list);
    },

    byFiche: function (ficheId) {
      let list = excludeObsolete(F.bank.byFiche(ficheId));
      if (ficheId === "temps-conduite" || ficheId === "pauses") {
        const gen = F.generate.fromTemplate("drive-time", 8).filter(function (q) {
          return q.relatedFiche === ficheId || (ficheId === "temps-conduite" && q.category === "temps-conduite") || (ficheId === "pauses" && q.category === "pauses");
        });
        list = list.concat(gen);
      }
      return shuffle(list);
    },

    errors: function (ficheId) {
      const ids = F.progress.errorIds();
      let list = excludeObsolete(F.bank.allFixed()).filter(function (q) {
        return ids.indexOf(q.id) !== -1;
      });
      if (ficheId) {
        list = list.filter(function (q) {
          return q.relatedFiche === ficheId || q.category === ficheId;
        });
      }
      return shuffle(list);
    }
  };
})();
