import { useEffect, useMemo, useState } from 'react';
import LeafMeal from './LeafMeal';
import { CATEGORIES, KITCHEN, MENU, type Category, type Dish } from './config';

type Cart = Record<string, number>;
const rupee = (n: number) => `₹${n.toLocaleString('en-IN')}`;

function loadCart(): Cart {
  try {
    return JSON.parse(localStorage.getItem('fk-cart') || '{}');
  } catch {
    return {};
  }
}

export default function App() {
  const [category, setCategory] = useState<Category>('Meals');
  const [vegOnly, setVegOnly] = useState(false);
  const [cart, setCart] = useState<Cart>(loadCart);
  const [cartOpen, setCartOpen] = useState(false);
  const [mode, setMode] = useState<'Parcel pickup' | 'Home delivery'>('Parcel pickup');
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('fk-cart', JSON.stringify(cart));
    } catch {
      /* storage unavailable */
    }
  }, [cart]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setCartOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const dishes = useMemo(
    () => MENU.filter((d) => d.category === category && (!vegOnly || d.veg)),
    [category, vegOnly],
  );
  const lines = MENU.filter((d) => cart[d.id]).map((d) => ({ dish: d, qty: cart[d.id] }));
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.qty * l.dish.price, 0);

  const change = (id: string, delta: number) =>
    setCart((c) => {
      const next = { ...c, [id]: Math.max(0, (c[id] || 0) + delta) };
      if (!next[id]) delete next[id];
      return next;
    });

  const sendOrder = () => {
    const body = [
      `Vanakkam ${KITCHEN.name} ${KITCHEN.subname}! I'd like to order:`,
      '',
      ...lines.map((l) => `• ${l.dish.name} × ${l.qty} = ${rupee(l.qty * l.dish.price)}`),
      '',
      `Total: ${rupee(total)}`,
      `Order type: ${mode}`,
      name ? `Name: ${name}` : null,
      note ? `Note: ${note}` : null,
    ]
      .filter((x): x is string => x !== null)
      .join('\n');
    window.open(`https://wa.me/${KITCHEN.whatsapp}?text=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <>
      <header className="topbar">
        <a href="#top" className="brand" aria-label={`${KITCHEN.name} ${KITCHEN.subname} home`}>
          <span className="brand-mark" aria-hidden="true" />
          <span>
            <strong>{KITCHEN.name}</strong> {KITCHEN.subname}
          </span>
        </a>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="tamil">{KITCHEN.tamilName}</p>
            <h1>
              {KITCHEN.name}
              <span>{KITCHEN.subname}</span>
            </h1>
            <p className="lede">{KITCHEN.tagline}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#menu">See today's menu</a>
              <a className="btn ghost" href={`tel:${KITCHEN.phoneDisplay.replace(/\s/g, '')}`}>Call {KITCHEN.phoneDisplay}</a>
            </div>
          </div>
          <div className="hero-art">
            <LeafMeal />
            <p className="leaf-caption">Veg meals, {rupee(100)} — served on a banana leaf, refills on rice and sambar.</p>
          </div>
        </section>

        <section id="menu" className="menu">
          <div className="menu-head">
            <h2>Menu</h2>
            <label className="veg-toggle">
              <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} />
              <span className="switch" aria-hidden="true" />
              Veg only
            </label>
          </div>

          <div className="tabs" role="tablist" aria-label="Menu categories">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={category === c}
                className={category === c ? 'tab active' : 'tab'}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="dishes">
            {dishes.map((d) => (
              <DishRow key={d.id} dish={d} qty={cart[d.id] || 0} onChange={change} />
            ))}
            {dishes.length === 0 && <li className="empty">No veg dishes in this section. Turn off “Veg only” to see everything.</li>}
          </ul>
        </section>

        <section id="story" className="story">
          <div className="kolam" aria-hidden="true" />
          <div>
            <h2>Why “Father Kitchen”</h2>
            <p>
              Every recipe here started in one home kitchen — Appa's. The sambar is ground fresh each morning,
              the biryani uses seeraga samba rice, and nothing is reheated from yesterday.
            </p>
            <p>
              We named the kitchen after him and after Siva Guru, whose blessing opens every day's cooking.
              Come in for a leaf meal, or send a parcel order on WhatsApp and pick it up hot.
            </p>
          </div>
        </section>

        <section id="visit" className="visit">
          <div>
            <h2>Visit or call</h2>
            <p className="address">{KITCHEN.address}</p>
            <div className="hero-actions">
              <a className="btn primary" href={KITCHEN.mapsUrl} target="_blank" rel="noreferrer">Get directions</a>
              <a className="btn ghost" href={`https://wa.me/${KITCHEN.whatsapp}`} target="_blank" rel="noreferrer">Message on WhatsApp</a>
            </div>
          </div>
          <dl className="hours">
            {KITCHEN.hours.map((h) => (
              <div key={h.label}>
                <dt>{h.label}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {KITCHEN.name} {KITCHEN.subname} · Veppampattu</p>
      </footer>

      {count > 0 && !cartOpen && (
        <button className="cart-bar" onClick={() => setCartOpen(true)}>
          <span>{count} {count === 1 ? 'item' : 'items'} · {rupee(total)}</span>
          <strong>Review order</strong>
        </button>
      )}

      {cartOpen && (
        <div className="sheet-backdrop" onClick={() => setCartOpen(false)}>
          <aside className="sheet" role="dialog" aria-modal="true" aria-label="Your order" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-head">
              <h2>Your order</h2>
              <button className="close" onClick={() => setCartOpen(false)} aria-label="Close order">×</button>
            </div>
            {lines.length === 0 ? (
              <p className="empty">Your order is empty. Add dishes from the menu.</p>
            ) : (
              <>
                <ul className="lines">
                  {lines.map((l) => (
                    <li key={l.dish.id}>
                      <span>{l.dish.name}</span>
                      <Stepper qty={l.qty} onChange={(d) => change(l.dish.id, d)} label={l.dish.name} />
                      <span className="amt">{rupee(l.qty * l.dish.price)}</span>
                    </li>
                  ))}
                </ul>
                <div className="seg" role="radiogroup" aria-label="Order type">
                  {(['Parcel pickup', 'Home delivery'] as const).map((m) => (
                    <button key={m} role="radio" aria-checked={mode === m} className={mode === m ? 'on' : ''} onClick={() => setMode(m)}>
                      {m}
                    </button>
                  ))}
                </div>
                <label className="field">Your name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Optional" /></label>
                <label className="field">
                  {mode === 'Home delivery' ? 'Delivery address' : 'Note for the kitchen'}
                  <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} placeholder={mode === 'Home delivery' ? 'Street, landmark' : 'Less spicy, pickup time…'} />
                </label>
                <div className="total"><span>Total</span><strong>{rupee(total)}</strong></div>
                <button className="btn primary wide" onClick={sendOrder}>Send order on WhatsApp</button>
                <button className="link" onClick={() => setCart({})}>Clear order</button>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}

function DishRow({ dish, qty, onChange }: { dish: Dish; qty: number; onChange: (id: string, d: number) => void }) {
  return (
    <li className="dish-row">
      <span className={dish.veg ? 'mark veg' : 'mark nonveg'} title={dish.veg ? 'Vegetarian' : 'Non-vegetarian'} aria-label={dish.veg ? 'Vegetarian' : 'Non-vegetarian'} />
      <div className="dish-text">
        <h3>
          {dish.name}
          {dish.special && <span className="special">Appa's pick</span>}
        </h3>
        <p className="dish-tamil">{dish.tamil}</p>
        <p>{dish.description}</p>
      </div>
      <div className="dish-buy">
        <span className="price">{rupee(dish.price)}</span>
        {qty === 0 ? (
          <button className="add" onClick={() => onChange(dish.id, 1)} aria-label={`Add ${dish.name}`}>Add</button>
        ) : (
          <Stepper qty={qty} onChange={(d) => onChange(dish.id, d)} label={dish.name} />
        )}
      </div>
    </li>
  );
}

function Stepper({ qty, onChange, label }: { qty: number; onChange: (d: number) => void; label: string }) {
  return (
    <span className="stepper">
      <button onClick={() => onChange(-1)} aria-label={`Remove one ${label}`}>−</button>
      <span aria-live="polite">{qty}</span>
      <button onClick={() => onChange(1)} aria-label={`Add one ${label}`}>+</button>
    </span>
  );
}
