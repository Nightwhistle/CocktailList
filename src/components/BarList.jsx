import { stock } from "../data/sastojci";

/**
 * Pićovnik: spisak svega što je na baru.
 * Grupa i redosled se čitaju iz `sastojci.js` — ništa se ne duplira.
 */
export default function BarList() {
  const items = Object.values(stock);
  const groups = [];
  const groupIndex = new Map();

  items.forEach((item) => {
    if (!groupIndex.has(item.group)) {
      groupIndex.set(item.group, groups.length);
      groups.push({ label: item.group, items: [] });
    }

    groups[groupIndex.get(item.group)].items.push(item);
  });

  return (
    <section className="bar-wrap" aria-label="Pićovnik">
      <div className="bar bar--static">
        <div className="bar-head">
          <span className="bar-title">Pićovnik</span>
          <span className="bar-count">{items.length} sastojka</span>
        </div>

        <div className="bar-body">
          {groups.map((group) => (
            <div className="bar-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="bar-name">
                      <span
                        className="bar-dot"
                        style={{ background: item.color }}
                        aria-hidden="true"
                      />
                      {item.name}
                    </span>
                    {item.abv > 0 ? <b>{item.abv}%</b> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
