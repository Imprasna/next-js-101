import React from 'react';
import "./dashboard.css";
import { delay } from '@/lib/util';

async function Dashboard() {
  await delay(5000);

  return (
    <div className="dashboard">Dashboard</div>
  )
}

export default Dashboard