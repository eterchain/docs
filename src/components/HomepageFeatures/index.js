import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React, { useState } from "react";
import "charts.css";



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

const realData =[
  { value: 10 },
  { value: 22 },
  { value: 29 },
  { value: 30 },
  { value: 50 },
  { value: 60 },
  { value: 90 },
  { value: 110 },
  { value: 122 },
  { value: 129 },
  { value: 130 },
  { value: 150 },
  { value: 160 },
  { value: 190 },
  { value: 210 },
  { value: 222 },
  { value: 229 },
  { value: 230 },
  { value: 250 },
  { value: 260 },
  { value: 290 },
  { value: 310 },
  { value: 312 },
  { value: 329 },
  { value: 330 },
  { value: 350 },
  { value: 360 },
  { value: 390 },
  { value: 410 },
];

const getMinMax = (data) => {
  const values = data.map(item => item.value);
  const max = Math.max(...values)*1.3;
  return { max };
};

const generateChartData = (data) => {
  const { max } = getMinMax(data);
  
  // Inisialisasi chartData
  let previousEnd = 0;  // Menyimpan nilai end sebelumnya
  const chartData = data.map((item) => {
    const end = item.value / max;  // nilai end dibagi max
    
    const chartItem = {
      start: previousEnd,
      end,
      label: `${item.value}`,  // Label dengan format sesuai value
    };
    
    // Update previousEnd
    previousEnd = end;
    
    return chartItem;
  });

  return chartData;
};

const chartData = generateChartData(realData);

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
  const [data, setData] = useState([
    { id: 1, wallet: "0x5dF47Af1eFdfa24073E7135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { id: 2, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { id: 3, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    // Tambahkan lebih banyak data di sini
  ]);
  const [search, setSearch] = useState("");
  
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  
  const filteredData = data.filter((item) =>
    item.wallet.toLowerCase().includes(search.toLowerCase())
  );

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
            <div id="my-chart" key={idx} className={styles.gridItemSolo}>
              

              <table class="charts-css line show-heading">
                <caption className={styles.chartTitle}>eClient Growth</caption>
                <tbody>
                  {chartData.map((data, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          "--start": data.start,
                          "--end": data.end,
                          "--line-color": "black",
                          borderLeft: `1px dashed #707070`, // Ubah warna garis di sini
                          
                        }}
                      >
                        {/*<span className={styles.chartlabel} style={{ fontSize: '0.8rem' }}>{data.label}</span>*/}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {/* Grid kanan */}
        <div class="gridRight">
        
          <div className="gridTable">
            <input
              className={styles.gridItemSearch}
              type="search"
              id="search"
              placeholder="SEARCH WALLET ADDRESS"
              value={search}
              onChange={handleSearchChange} // Event untuk pencarian otomatis
              aria-controls="dataTable"
            />
          </div>

          {/* <table class="gridTable">
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
              <tr className={styles.LeaderboardText}>
                <td>1</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>2</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>3</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>4</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>5</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>6</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>7</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>8</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>9</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>10</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>11</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>12</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>13</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>14</td>
                <td class="wallet">0x0758bF6151C6DC2A58C95147C5B1f675be178D7c</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
              <tr className={styles.LeaderboardText}>
                <td>15</td>
                <td class="wallet">0x5dF47Af1eFdfa24073E7135bD3A309d180A51261</td>
                <td>32,152</td>
                <td>24</td>
                <td>5.5 Mh/s</td>
              </tr>
            </tbody>
          </table> */}
          <table className="gridTable">
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
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item.id} className={styles.LeaderboardText}>
                    <td>{index + 1}</td>
                    <td className="wallet">{item.wallet}</td>
                    <td>{item.point.toLocaleString()}</td>
                    <td>{item.worker}</td>
                    <td>{item.speed}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", color: "red" }}>
                    Wallet not found
                  </td>
                </tr>
              )}
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
