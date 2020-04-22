import React from "react";

import StatsHalf from "../StatsHalf/StatsHalf";
import StatsFull from "../StatsFull/StatsFull";
import StatsContainer from "../StatsContainer/StatsContainer";

// COMPONENT FOR LANDING PAGE INFORMATION
function Welcome() {
  return (
    <div>
      <h1>Welcome to the Axxys Security Tracker!</h1>
      <h2>What is this?</h2>
      <p>
        This tool is designed to help a company track the security posture of
        their clients.
      </p>
      <h2>How does it work?</h2>
      <p>
        The system is built of Clients, Security Items, and Categories. You will
        create Categories and Security Items and then adjust the posture of a
        particular client by enabling / disabling that item in the Clients
        section.
      </p>
      <h2>Can I run a report?</h2>
      <p>
        Yes! After you have edited a client by assigning and adjusting the
        active Security Items you can then click on the report icon in the
        Client settings. This will show you a report summarizing their overall
        security posture.
      </p>
    </div>
  );
}

export default Welcome;
