import React from "react";
import Workflow from "./Workflow";



const Workflows = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 p-6">
        <Workflow
          description="Creating a test workflow"
          id="e23498fj239"
          name="Automation workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
 