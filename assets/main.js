function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function linkHTML(item) {
  if (!item || !item.url) return "";
  return `<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener">${escapeHTML(item.label)}</a>`;
}

function detailList(details) {
  if (!details || !details.length) return "";
  return `<ul>${details.map((d) => `<li>${escapeHTML(d)}</li>`).join("")}</ul>`;
}

function itemLinks(links) {
  const valid = (links || []).filter((l) => l.url);
  if (!valid.length) return "";
  return `<p class="item-links">${valid.map(linkHTML).join(" · ")}</p>`;
}

function hideIfEmpty(sectionId, values) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const empty = !values || (Array.isArray(values) && values.length === 0);
  section.hidden = empty;
}

function renderProfile(data) {
  document.title = data.siteTitle || data.name || "Academic Website";
  document.getElementById("page-title").textContent = document.title;

  document.getElementById("name").textContent = data.name || "";
  document.getElementById("name-korean").textContent = data.nameKorean || "";
  document.getElementById("title").textContent = data.title || "";
  document.getElementById("affiliation").textContent = data.affiliation || "";

  const photo = document.getElementById("profile-photo");
  if (data.photo) {
    photo.src = data.photo;
    photo.alt = `${data.name || "Profile"} photo`;
    photo.hidden = false;
  }

  const contactParts = [];
  if (data.contact?.email) {
    contactParts.push(`<a href="mailto:${escapeHTML(data.contact.email)}">${escapeHTML(data.contact.email)}</a>`);
  }
  if (data.contact?.location) {
    contactParts.push(`<span>${escapeHTML(data.contact.location)}</span>`);
  }
  document.getElementById("contact").innerHTML = contactParts.join("");

  const links = (data.links || []).filter((l) => l.url);
  document.getElementById("links").innerHTML = links.map(linkHTML).join("");
}

function renderBio(data) {
  document.getElementById("bio").innerHTML = (data.bio || [])
    .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");
}

function renderNews(data) {
  hideIfEmpty("news", data.news);
  document.getElementById("news-list").innerHTML = (data.news || [])
    .map((item) => `<li><span class="date">${escapeHTML(item.date)}</span> ${escapeHTML(item.text)}</li>`)
    .join("");
}

function renderInterests(data) {
  document.getElementById("interests-list").innerHTML = (data.researchInterests || [])
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join("");
}

function renderResearch(data) {
  const items = data.research || [];
  document.getElementById("research-list").innerHTML = items
    .map((item) => `
      <article class="entry">
        <h3>${escapeHTML(item.title)}</h3>
        ${item.meta ? `<p class="meta">${escapeHTML(item.meta)}</p>` : ""}
        ${item.description ? `<p>${escapeHTML(item.description)}</p>` : ""}
        ${itemLinks(item.links)}
      </article>
    `)
    .join("");
}

function renderPublications(data) {
  hideIfEmpty("publications", data.publications);
  document.getElementById("publications-list").innerHTML = (data.publications || [])
    .map((item) => `
      <li>
        <strong>${escapeHTML(item.title)}</strong><br />
        <span>${escapeHTML(item.authors)}</span><br />
        <span class="meta">${escapeHTML(item.venue)}</span>
        ${item.note ? `<p>${escapeHTML(item.note)}</p>` : ""}
        ${itemLinks(item.links)}
      </li>
    `)
    .join("");
}

function renderEducation(data) {
  document.getElementById("education-list").innerHTML = (data.education || [])
    .map((item) => `
      <article class="entry">
        <h3>${escapeHTML(item.degree)}</h3>
        <p class="meta">${escapeHTML(item.institution)} · ${escapeHTML(item.period)}</p>
        ${detailList(item.details)}
      </article>
    `)
    .join("");
}

function renderExperience(data) {
  hideIfEmpty("experience", data.experience);
  document.getElementById("experience-list").innerHTML = (data.experience || [])
    .map((item) => `
      <article class="entry">
        <h3>${escapeHTML(item.role)}</h3>
        <p class="meta">${escapeHTML(item.organization)} · ${escapeHTML(item.period)}</p>
        ${detailList(item.details)}
      </article>
    `)
    .join("");
}

function renderTeaching(data) {
  hideIfEmpty("teaching", data.teaching);
  document.getElementById("teaching-list").innerHTML = (data.teaching || [])
    .map((item) => `
      <article class="entry">
        <h3>${escapeHTML(item.role)}</h3>
        <p class="meta">${escapeHTML(item.course)} · ${escapeHTML(item.period)}</p>
        ${detailList(item.details)}
      </article>
    `)
    .join("");
}

function renderHonors(data) {
  hideIfEmpty("honors", data.honors);
  document.getElementById("honors-list").innerHTML = (data.honors || [])
    .map((item) => `
      <article class="entry">
        <h3>${escapeHTML(item.title)}</h3>
        <p class="meta">${escapeHTML(item.organization)} · ${escapeHTML(item.period)}</p>
        ${item.details ? `<p>${escapeHTML(item.details)}</p>` : ""}
      </article>
    `)
    .join("");
}

function renderService(data) {
  hideIfEmpty("service", data.service);
  document.getElementById("service-list").innerHTML = (data.service || [])
    .map((item) => `
      <article class="entry">
        <h3>${escapeHTML(item.title)}</h3>
        <p class="meta">${escapeHTML(item.role)} · ${escapeHTML(item.period)}</p>
        ${item.details ? `<p>${escapeHTML(item.details)}</p>` : ""}
      </article>
    `)
    .join("");
}

function renderFooter(data) {
  document.getElementById("last-updated").textContent = data.lastUpdated
    ? `Last updated: ${data.lastUpdated}`
    : "";
}

function renderSite() {
  const data = window.SITE_DATA || SITE_DATA;
  renderProfile(data);
  renderBio(data);
  renderNews(data);
  renderInterests(data);
  renderResearch(data);
  renderPublications(data);
  renderEducation(data);
  renderExperience(data);
  renderTeaching(data);
  renderHonors(data);
  renderService(data);
  renderFooter(data);
}

renderSite();
