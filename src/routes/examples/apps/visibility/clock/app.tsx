import { component$, useStore, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import styles from './clock.css';

export default component$(() => {
  const items = new Array(60).fill(null).map((_, index) => 'item ' + index);

  console.log('PARENT');
  return (
    <div>
      <p onClick$={() => console.log('test')}>
      C'est un exemple d'exécution différé de code sur le composant lorsque celui-ci devient visible.
      </p>

      <p>
        ⬇️ <strong>Faites défiler vers le bas</strong> jusqu'à ce que l'horloge soit visible.
      </p>

      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>

      <Clock />
    </div>
  );
});

export const Clock = component$(() => {
  useStyles$(styles);

  const store = useStore({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useVisibleTask$(() => {
    const update = () => {
      const now = new Date();
      store.second = now.getSeconds() * (360 / 60);
      store.minute = now.getMinutes() * (360 / 60);
      store.hour = now.getHours() * (360 / 12);
    };
    update();
    const tmrId = setInterval(update, 1000);
    return () => clearInterval(tmrId);
  });

  console.log('Render Clock');
  return (
    <div class="clock">
      <div class="twelve"></div>
      <div class="three"></div>
      <div class="six"></div>
      <div class="nine"></div>
      <div class="hour" style={{ transform: `rotate(${store.hour}deg)` }}></div>
      <div class="minute" style={{ transform: `rotate(${store.minute}deg)` }}></div>
      <div class="second" style={{ transform: `rotate(${store.second}deg)` }}></div>
    </div>
  );
});
