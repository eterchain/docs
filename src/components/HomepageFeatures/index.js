import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React, { useState, useEffect } from "react";
import "charts.css";
import Papa from "papaparse";
import Pagination from './pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faMicrochip, faLaptopCode, faMemory, faCode, faSackDollar } from '@fortawesome/free-solid-svg-icons';


const FeatureList = [];
const LeftGridItems = [
  { title: "GLOBAL eCLIENT", description: "2.234 ", types: "eClients", imageICO: faLaptopCode },
  { title: "GLOBAL WORKER", description: "6.874 ", types: "Workers", imageICO: faCode },
  { title: "GLOBAL SPEED", description: "58.8 ", types: "Th/s", imageICO: faServer },
  { title: "GLOBAL CPU", description: "4.845 ", types: "CPUs", imageICO: faMicrochip },
  { title: "TESTNET PAYOUT", description: "26.4M ", types: "ETERCHAIN", imageICO: faSackDollar },
  { title: "GLOBAL RAM", description: "24 ", types: "TB", imageICO: faMemory },
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
    { rank: 1, wallet: "0x5dF47Af1eFdfa24073E7135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 2, wallet: "0x0758bF6151C6DC2A58C92147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 3, wallet: "0xA1B2C3D4E5F67890123436789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 4, wallet: "0x0758bF6151C6DC2A58C94147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 5, wallet: "0xA1B2C3D4E5F67890123456789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 6, wallet: "0x5dF47Af1eFdfa24073E7635bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 7, wallet: "0x0758bF6151C6DC2A58C97147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 8, wallet: "0xA1B2C3D4E5F67890123486789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 9, wallet: "0x0758bF6151C6DC2A58C99147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 10, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 11, wallet: "0x5dF47Af1eFdfa24073E1135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 12, wallet: "0x0758bF6151C6DC2A58C25147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 13, wallet: "0xA1B2C3D4E5F67890123356789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 14, wallet: "0x0758bF6151C6DC2A58C45147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 15, wallet: "0xA1B2C3D4E5F67890123556789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 16, wallet: "0x5dF47Af1eFdfa24073E6135bD3A309d180A51261", point: 32152, worker: 24, speed: "5.5 Mh/s" },
    { rank: 17, wallet: "0x0758bF6151C6DC2A58C75147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 18, wallet: "0xA1B2C3D4E5F67890123856789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    { rank: 19, wallet: "0x0758bF6151C6DC2A58C95147C5B1f675be178D7c", point: 31200, worker: 22, speed: "5.3 Mh/s" },
    { rank: 20, wallet: "0xA1B2C3D4E5F67890123056789ABCDEF123456789", point: 29800, worker: 20, speed: "4.9 Mh/s" },
    // Tambahkan lebih banyak data di sini
  ]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  
  const filteredData = data.filter((item) =>
    item.wallet.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Handle page change
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className={styles.container2}>
        {/* Grid kiri */}
        <div className={styles.gridLeft}>
          {LeftGridItems.map((item, idx) => (
            <div key={idx} className={styles.gridItem}> {/*style={{ backgroundImage: `url(${item.imageICO})` }}>*/}
              <FontAwesomeIcon icon={item.imageICO} className={styles.gridItemIcon} />
              {/* <img
                    src={item.imageICO}  // Gantilah dengan URL gambar yang sesuai
                    alt={item.title}
                    className={styles.gridItemImage}  // Untuk styling gambar
                  /> */}
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
        <div className="gridRight">
          <div className="gridTable">
            <input
              className={styles.gridItemSearch}
              type="search"
              id="search"
              placeholder="<SEARCH WALLET ADDRESS>"
              value={search}
              onChange={handleSearchChange} // Event for automatic search
              style={{ borderBottom: "0.2px solid grey", borderTop: "0.2px solid grey"}} 
              aria-controls="dataTable"
            />
          </div>

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
              {currentPageData.length > 0 ? (
                currentPageData.map((item, index) => (
                  <tr key={item.rank} className={styles.LeaderboardText}>
                    <td>{item.rank}</td>
                    <td className={styles.wallet}>{item.wallet}</td>
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

          {/* Pagination Controls */}
          {/* Pagination Controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />


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
