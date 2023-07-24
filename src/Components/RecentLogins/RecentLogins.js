import "./RecentLogins.css";
import Card1 from "./Cards/Card1";

import Card2 from "./Cards/Card2";
import { useState } from "react";

function RecentLogins() {
  const [cardName, setCardName] = useState("Amir");

  return (
    <div class="logins">
      <div class="header">
        <h3 class="label">Facebook</h3>
        <h3 class="recent">Recent Logins</h3>
        <h6>Click your picture or add an account.</h6>
      </div>

      <div className="accounts">
        <div className="recentCards">
          <Card1 cardName={cardName} />
          <Card2 />
        </div>
      </div>
    </div>
  );
}
export default RecentLogins;
