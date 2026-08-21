(function () {
  const F = (window.FIMO = window.FIMO || {});

  F.recommend = {
    byFiche: function () {
      const answers = F.progress.get().answers;
      const buckets = {};
      Object.keys(answers).forEach(function (id) {
        const rec = answers[id];
        const key = rec.relatedFiche || rec.category || "autre";
        if (!buckets[key]) buckets[key] = { id: key, n: 0, ok: 0, ko: 0 };
        buckets[key].n += rec.n;
        buckets[key].ok += rec.ok;
        buckets[key].ko += rec.ko;
      });
      return Object.keys(buckets).map(function (k) {
        const b = buckets[k];
        b.rate = b.n ? Math.round((b.ok / b.n) * 100) : 0;
        const fiche = F.getFiche && F.getFiche(b.id);
        b.title = fiche ? fiche.title : b.id;
        b.domain = fiche ? fiche.domain : F.domainOfFiche(b.id);
        return b;
      });
    },

    byDomain: function () {
      const byFiche = F.recommend.byFiche();
      const buckets = {};
      (F.DOMAINS || []).forEach(function (d) {
        buckets[d.id] = { id: d.id, name: d.name, n: 0, ok: 0, ko: 0, rate: null };
      });
      byFiche.forEach(function (b) {
        const id = b.domain;
        if (!id || !buckets[id]) return;
        buckets[id].n += b.n;
        buckets[id].ok += b.ok;
        buckets[id].ko += b.ko;
      });
      return Object.keys(buckets).map(function (k) {
        const b = buckets[k];
        b.rate = b.n ? Math.round((b.ok / b.n) * 100) : null;
        return b;
      });
    },

    domainMap: function () {
      const out = {};
      F.recommend.byDomain().forEach(function (d) {
        out[d.id] = d.rate == null ? -1 : d.rate;
      });
      return out;
    },

    weakFiches: function (minAttempts) {
      minAttempts = minAttempts || 3;
      return F.recommend
        .byFiche()
        .filter(function (b) {
          return b.n >= minAttempts && b.rate < 75;
        })
        .sort(function (a, b) {
          return a.rate - b.rate;
        });
    }
  };
})();
