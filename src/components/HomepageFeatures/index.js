import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [];
const LeftGridItems = [
  { title: "Global eClient", description: "2.234 ", types: "eClients" },
  { title: "Global Worker", description: "6.874 ", types: "Workers" },
  { title: "Global Speed", description: "58.8 ", types: "Th/s" },
  { title: "Global CPU", description: "4.845 ", types: "CPUs" },
  { title: "Testnet Payout", description: "26.4", types: "M EC" },
  { title: "Global RAM", description: "24 ", types: "TB" },
  { title: "Judul 7", description: "- - -", types: "," },
  { title: "Judul 8", description: "- - -", types: "," },
  { title: "Judul 9", description: "- - -", types: "," },
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
        </div>

        {/* Grid kanan */}
        <div className={styles.gridRight}>
          <table>
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
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>2</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>3</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>4</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>5</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>6</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>7</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>8</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>9</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>10</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0x . . . 34te</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0x . . . 34te</td>
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
