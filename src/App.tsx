import ApplicationRouter from "./navigation/applicationRouter";

function App() {
  return (
    <div className="h-screen w-full overflow-x-clip normalText">
      <ApplicationRouter />
      <svg style={{ display: "none", zIndex:0 }}>
        <filter id="frost" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            seed="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            <animate
              attributeName="scale"
              values="6;9;6"
              dur="4s"
              repeatCount="indefinite"
            />
          </feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
}

export default App;
