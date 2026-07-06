import { ReactNode } from "react";
import './glass.css'
import { IClassName } from "../../utils/IClassName";

interface IGlass extends IClassName {
  className?: string;
  children: ReactNode;
}

function Glass({ className = "", children }: IGlass) {
  return (
    <div className={`glass-card ${className}`}>
      {children}
      <svg className="absolute w-0 h-0">
        <filter id='frost'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.01 0.01'
            numOctaves={1}
            seed={5}
            result='turbulence'
          />
          <feGaussianBlur in='turbulence' stdDeviation={3} result='softMap' />
          <feDisplacementMap in='SourceGraphic' in2='softMap' scale={150} />
        </filter>
      </svg>
      {/* <svg className="hidden">
        <filter
          id='de-glass-distortion'
          x='0%'
          y='0%'
          width='100%'
          height='100%'
          filterUnits='objectBoundingBox'
        >
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.01 0.01'
            numOctaves='1'
            seed='5'
            result='turbulence'
          >
            <animate
              attributeName='seed'
              from='1'
              to='200'
              dur='8s'
              repeatCount='indefinite'
            />
          </feTurbulence>

          <feComponentTransfer in='turbulence' result='mapped'>
            <feFuncR type='gamma' amplitude='1' exponent='10' offset='0.5' />
            <feFuncG type='gamma' amplitude='0' exponent='1' offset='0' />
            <feFuncB type='gamma' amplitude='0' exponent='1' offset='0.5' />
          </feComponentTransfer>

          <feGaussianBlur in='turbulence' stdDeviation='3' result='softMap' />

          <feSpecularLighting
            in='softMap'
            surfaceScale='5'
            specularConstant='1'
            specularExponent='100'
            lighting-color='white'
            result='specLight'
          >
            <fePointLight x='-200' y='-200' z='300' />
          </feSpecularLighting>

          <feComposite
            in='specLight'
            operator='arithmetic'
            k1='0'
            k2='1'
            k3='1'
            k4='0'
            result='litImage'
          />

          <feDisplacementMap
            in='SourceGraphic'
            in2='softMap'
            scale='150'
            xChannelSelector='R'
            yChannelSelector='G'
          />
        </filter>
      </svg> */}
    </div>
  );
}

export default Glass;
