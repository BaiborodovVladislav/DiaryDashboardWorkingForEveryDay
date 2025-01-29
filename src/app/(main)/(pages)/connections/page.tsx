import { CONNECTIONS } from '@/lib/constant'
import React from "react";
import ConnectionsCard from './_components/ConnectionsCard'

type Props = {
  searchParams?: { [key: string]: string | undefined };
};

const Connections = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Connection</span>
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          Connect all your apps directly from here. You may need to connect
          these apps regularly to refresh verification
	    {CONNECTIONS.map((connect => <ConnectionsCard key={connect.title}
	    description={connect.description}
	    icon={connect.image}
	    type={connect.title}
	    title={connect.title}
	//     connected={connect}
	    />))}
        </section>
      </div>
    </div>
  );
};

export default Connections;
