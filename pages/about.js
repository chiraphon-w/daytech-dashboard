import React from "react";
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>About - Daytech Dashboard</title>
      </Head>
      <h2 className="text-xl undefined">About</h2>
      <div className="pt-3">
        <div className="p-5 border-1 bg-white rounded-2xl">
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">
            I love &lt;programming /&gt;
          </h2>
          <p>
            Currently, we have only <strong>JustSay</strong>,{" "}
            <strong>Counter</strong> and <strong>Timer</strong> widgets.
          </p>
          <p>You can now add more widgets or even destroy all of then :P</p>
          <p>
            Crafted with <span className="text-red-600">♥</span> by Apple.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
