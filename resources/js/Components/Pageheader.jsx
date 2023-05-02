import React from 'react'

export default function Pageheader({value}) {
  return (
      <header>
          <div>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                  {value}
              </h1>
          </div>
      </header>
  );
}
