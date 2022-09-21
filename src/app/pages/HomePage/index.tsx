import { Button } from 'app/components/atoms';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Button>ABC</Button>
      <span className="text-3xl font-bold underline">My HomePage</span>
    </>
  );
}
