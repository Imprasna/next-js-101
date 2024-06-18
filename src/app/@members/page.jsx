import React from 'react';
import "./members.css"
import { delay } from '@/lib/util';

async function Members() {
    await delay(3000);

  return (
    <div className="members">Members</div>
  )
}

export default Members