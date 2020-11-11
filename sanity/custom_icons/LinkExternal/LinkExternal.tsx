import * as React from "react"

function LinkExternal(props: React.SVGProps<SVGSVGElement>) {
  return (
        <svg data-name="Layer 1" viewBox="0 0 24 24" {...props} height="1em" width="1em" preserveAspectRatio="xMidyMid">
        <defs>
          <filter
            id="prefix__a"
            x={7.44}
            y={2.96}
            width={13.67}
            height={13.6}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            >
            <feFlood floodColor="#fff" result="bg" />
            <feBlend in="SourceGraphic" in2="bg" />
          </filter>
          <filter
            id="prefix__b"
            x={2.96}
            y={7.44}
            width={13.6}
            height={13.67}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            >
            <feFlood floodColor="#fff" result="bg" />
            <feBlend in="SourceGraphic" in2="bg" />
          </filter>
          <mask
            id="prefix__c"
            x={7.44}
            y={2.96}
            width={13.67}
            height={13.6}
            maskUnits="userSpaceOnUse"
            >
            <path
              fill="none"
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={3}
              filter="url(#prefix__a)"
              d="M8.5 15.5l7-7"
              />
          </mask>
          <mask
            id="prefix__d"
            x={2.96}
            y={7.44}
            width={13.6}
            height={13.67}
            maskUnits="userSpaceOnUse"
            >
            <path
              fill="none"
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={3}
              filter="url(#prefix__b)"
              d="M8.5 15.5l7-7"
              />
          </mask>
        </defs>
        <g mask="url(#prefix__c)">
          <path
            d="M15.12 11.61a2.1 2.1 0 01-1.49-.61l-.55-.55a2.1 2.1 0 010-3l3.38-3.38a2.1 2.1 0 013 0l.55.55a2.09 2.09 0 010 3L16.61 11a2.06 2.06 0 01-1.49.61z"
            fill="#fff"
            />
          <path d="M18 4a1.61 1.61 0 011.14.47l.55.55a1.62 1.62 0 010 2.28l-3.38 3.38a1.62 1.62 0 01-2.28 0l-.55-.55a1.62 1.62 0 010-2.28l3.38-3.38A1.61 1.61 0 0118 4m0-1a2.61 2.61 0 00-1.85.77L12.73 7.1a2.62 2.62 0 000 3.7l.54.55a2.63 2.63 0 003.7 0L20.35 8a2.64 2.64 0 000-3.7l-.55-.54A2.61 2.61 0 0018 3z" />
        </g>
        <g mask="url(#prefix__d)">
          <path
            d="M6.12 20.61A2.1 2.1 0 014.63 20l-.55-.55a2.11 2.11 0 010-3l3.38-3.38a2.1 2.1 0 013 0l.55.55a2.09 2.09 0 010 3L7.61 20a2.06 2.06 0 01-1.49.61z"
            fill="#fff"
            />
          <path d="M9 13a1.61 1.61 0 011.14.47l.55.55a1.62 1.62 0 010 2.28l-3.43 3.34a1.62 1.62 0 01-2.28 0l-.55-.55a1.62 1.62 0 010-2.28l3.38-3.38A1.61 1.61 0 019 13m0-1a2.61 2.61 0 00-1.85.77L3.73 16.1a2.62 2.62 0 000 3.7l.54.55a2.63 2.63 0 003.7 0L11.35 17a2.64 2.64 0 000-3.7l-.55-.54A2.61 2.61 0 009 12z" />
        </g>
        <path
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          d="M8.5 15.5l7-7M7.5 7.5l-6-6M1.5 6.5v-5M6.5 1.5h-5M16.5 16.5l6 6M22.5 17.5v5M17.5 22.5h5"
          />
      </svg>
  )
}

export default LinkExternal;
