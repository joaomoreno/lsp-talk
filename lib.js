function avatar(member) {
  return `<div style="display:inline-block;font-size:0.8em;text-align:center;margin:0 0.3em"><img width="100" src="${
    member.avatar
  }"/></br>${member.name.split(" ")[0]}</div>`;
}

module.exports.render = (team) => $$.html(`${team.map(avatar).join("")}`);

module.exports.renderRoles = (team) =>
  $$.html(
    [
      ...team.reduce(
        (map, member) =>
          map.set(member.role, [...(map.get(member.role) || []), member]),
        new Map()
      ),
    ]
      .map(
        ([role, members]) =>
          `<h2>${role}</h2><p>${[...members].map(avatar).join("")}</p>`
      )
      .join("")
  );

module.exports.renderFlags = (team) =>
  $$.html(
    [...new Set(team.map((p) => p.origin))].map(
      (o) =>
        `<img style="margin: 0 1em" height=100 src="https://unpkg.com/svg-country-flags@1.2.10/png250px/${o.toLowerCase()}.png">`
    )
  );
