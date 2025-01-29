import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [];
const LeftGridItems = [
  { title: "Global eClient", description: "2.234 ", types: "eClients" },
  { title: "Global Worker", description: "6.874 ", types: "Workers" },
  { title: "Global Speed", description: "58.8 ", types: "Th/s" },
  { title: "Global CPU", description: "4.845 ", types: "CPUs" },
  { title: "Testnet Payout", description: "26.4M ", types: "ETERCHAIN" },
  { title: "Global RAM", description: "24 ", types: "TB" },
];
const LeftGridItems2 = [
  { title: "Judul 7", description: "- - -", types: "," },
];


function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <div className={styles.container2}>
        {/* Grid kiri */}
        <div className={styles.gridLeft}>
          {LeftGridItems.map((item, idx) => (
            <div key={idx} className={styles.gridItem}>
              <p>
              <span className={styles.itemtitle}>{item.title}</span>
              </p>
              <hr className={styles.midleLine} />
              <p>
                <span className={styles.description}>{item.description}</span>
                <span className={styles.types}>{item.types}</span>
              </p>
            </div>
          ))}
          {LeftGridItems2.map((item, idx) => (
            <div key={idx} className={styles.gridItemSolo}>
              <p>
              <span className={styles.itemtitle}>{item.title}</span>
              </p>
              <hr className={styles.midleLine} />
              <p>
                <span className={styles.description}>{item.description}</span>
                <span className={styles.types}>{item.types}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Grid kanan */}
        <div class="gridRight">
          <table class="gridTable">
            <thead>
              <tr>
                <th>#</th>
                <th>Wallet</th>
                <th>Point</th>
                <th>Worker</th>
                <th>Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>2</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>3</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>4</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>5</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>6</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>7</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>8</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>9</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>10</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>11</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>12</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>13</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>14</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>15</td>
                <td class="wallet">0x95d1E . . . . 4AF64a</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* Section for Features */}
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
