(function () {
  const F = (window.FIMO = window.FIMO || {});

  F.decorateQuestion = function (q) {
    if (!q || q.metaVersion) return q;
    const m = (F.LEGACY_MAP && F.LEGACY_MAP[q.category]) || {};
    if (q.subcategory == null) q.subcategory = m.subcategory || null;
    if (q.difficulty == null) q.difficulty = null;
    if (!q.relatedFiche) q.relatedFiche = m.fiche || q.category || null;
    if (!q.skill) q.skill = m.skill || q.category || null;
    if (!q.domain) q.domain = m.domain || F.domainOfFiche(q.relatedFiche) || null;
    if (!q.type) q.type = "single";
    if (q.source === undefined) q.source = null;
    if (!q.origin) q.origin = q.templateId ? "generated" : "legacy";
    if (!q.auditStatus) {
      q.auditStatus = q.origin === "generated" ? "generated" : "pending";
    }
    if (!q.tags) q.tags = [];
    q.metaVersion = F.SCHEMA_VERSION || 1;
    return q;
  };

  F.decorateBank = function () {
    (window.QUESTIONS || []).forEach(F.decorateQuestion);
    (F.NEW_QUESTIONS || []).forEach(function (q) {
      if (!q.origin) q.origin = "new";
      F.decorateQuestion(q);
    });
  };
})();
