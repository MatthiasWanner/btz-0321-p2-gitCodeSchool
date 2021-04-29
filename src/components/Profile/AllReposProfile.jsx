import { useEffect, useState } from 'react';
import React from 'react';
import API_URL from "../../api/endpoints"


export default function AllReposProfile() {
    const [showAllRepos, setShowAllReps]=useState();



  return (
    <div>
      <h1 className="text-white">Helloo This is All Repos from the profile</h1>
    </div>
  );
}
