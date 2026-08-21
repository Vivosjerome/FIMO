(function () {
  const F = (window.FIMO = window.FIMO || {});

  function allFixed() {
    return window.QUESTIONS || [];
  }

  F.bank = {
    allFixed: allFixed,

    byId: function (id) {
      const list = allFixed();
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) return list[i];
      }
      return null;
    },

    byCategory: function (id) {
      return allFixed().filter(function (q) {
        return q.category === id;
      });
    },

    byFiche: function (ficheId) {
      return allFixed().filter(function (q) {
        return q.relatedFiche === ficheId || q.category === ficheId;
      });
    },

    byDomain: function (domainId) {
      return allFixed().filter(function (q) {
        return q.domain === domainId;
      });
    },

    byAudit: function (status) {
      return allFixed().filter(function (q) {
        return q.auditStatus === status;
      });
    },

    usable: function () {
      return allFixed().filter(function (q) {
        return q.auditStatus !== "obsolete";
      });
    },

    stats: function () {
      const list = allFixed();
      const byAudit = {};
      const byCat = {};
      list.forEach(function (q) {
        const a = q.auditStatus || "pending";
        byAudit[a] = (byAudit[a] || 0) + 1;
        byCat[q.category] = (byCat[q.category] || 0) + 1;
      });
      return {
        fixed: list.length,
        newCount: (F.NEW_QUESTIONS || []).length,
        legacyCount: 0,
        fiches: (F.FICHES || []).length,
        byAudit: byAudit,
        byCat: byCat
      };
    }
  };
})();
