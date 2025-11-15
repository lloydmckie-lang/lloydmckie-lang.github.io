import React from 'react';
import './App.css';
import { CareerDevelopment } from './components/careerdevelopment'
import { BlogPost } from './components/blogpost'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lloyd McKie - Developer Notebook</h1>
        <p>Training Champion • Cloud & DevOps • Solution Architect</p>
      </header>
      <main className="App-main">
        
        <section>
          <h2>Career</h2>
          <CareerDevelopment/>
        </section>

        <section>
          <h2>AWS</h2>
          <BlogPost title="SAA - Solution Architect Associate" link='https://deplloyd.hashnode.dev/solution-architect-associate-saa' description='Get started on your AWS career with SAA certification'/>
          <BlogPost title="DVA - Developer Associate" link='https://deplloyd.hashnode.dev/aws-developer-associate' description='AWS Developer Associate certification guide'/>
        </section>

        <section>
          <h2>Azure</h2>
          <BlogPost title="Az-900" link='https://lloyd150337.substack.com/p/azure-fundamental-az-900' description='Azure Fundamentals certification'/>
        </section>

        <section>
          <h2>Software Architecture</h2>
          <BlogPost title="AWS WAF - Well Architected Framework" link='https://lloyd150337.substack.com/p/well-architected-lens-cost-agentic' description=''/>
          <BlogPost title="AWS Scaling" link='https://lloyd150337.substack.com/p/the-scaling-spectrum-who-owns-your' description='Understanding scaling patterns'/>
          <BlogPost title="Trajectories for Architects and Developers" link='https://lloyd150337.substack.com/p/trajectories-for-architects-and-developers' description=''/>
        </section>

        <section>
          <h2>Security</h2>
          <BlogPost title="Quantum Clock is ticking" link='https://lloyd150337.substack.com/p/the-quantum-clock-is-ticking' description=''/>
          <BlogPost title="RBAC and ABAC" link='https://lloyd150337.substack.com/p/from-role-bloat-to-resource-bliss' description='Access control patterns'/>
        </section>

        <section>
          <h2>Software Development</h2>
          <BlogPost title="CDK - Networking VPC Flow logs (Part 1)" link='https://deplloyd.hashnode.dev/vpc-flow-logs-with-cdk-part-1' description=''/>
          <BlogPost title="CDK - VPC Flow logs (Part 2)" link='https://deplloyd.hashnode.dev/vpc-flow-logs-with-cdk-part-2' description=''/>
          <BlogPost title="S3 Endpoints with CDK" link='https://deplloyd.hashnode.dev/aws-gateway-vpc-endpoint-s3-with-cdk' description=''/>
          <BlogPost title="Application Load Balancers with CDK" link='https://deplloyd.hashnode.dev/aws-application-load-balancer-with-cdk' description=''/>
          <BlogPost title="Builder Pattern in AWS CDK" link='https://deplloyd.hashnode.dev/the-builder-pattern-in-cdk' description=''/>
          <BlogPost title="From Proofs to Programs - .NET LINQ" link='https://lloyd150337.substack.com/p/from-proofs-to-programs-the-deep' description=''/>
        </section>

        <section>
          <h2>Testing & Packaging</h2>
          <BlogPost title="Snapshot Testing" link='https://deplloyd.hashnode.dev/snapshot-testing-reactive-to-proactive' description='Reactive to proactive testing'/>
          <BlogPost title="UV is replacing Pip" link='https://lloyd150337.substack.com/p/why-uv-is-replacing-pip-a-deep-dive' description='Python packaging evolution'/>
        </section>

        <section>
          <h2>Site Reliability Engineering</h2>
          <BlogPost title="Site Reliability Engineering" link='https://deplloyd.hashnode.dev/site-reliability-engineering-sre' description='SRE principles and practices'/>
          <BlogPost title="Developers Hierarchy of Needs" link='https://deplloyd.hashnode.dev/developers-hierarchy-of-needs' description=''/>
        </section>

        <section>
          <h2>AI</h2>
          <BlogPost title="Agentic AI in Field Service Management" link='https://lloyd150337.substack.com/p/how-agentic-ai-in-field-service-management' description=''/>
        </section>

        <section>
          <h2>Events & Speaking</h2>
          <BlogPost title="AWS CDK, Networking, Compliance" link='https://lloyd150337.substack.com/p/aws-cdk-aws-networking-and-compliance' description=''/>
          <BlogPost title="DDDPerth 2025" link='https://lloyd150337.substack.com/p/celebrating-an-incredible-dddperth' description=''/>
          <BlogPost title="GitHub Perth - Advanced Configuration" link='https://lloyd150337.substack.com/p/stop-fighting-git-advanced-configuration' description=''/>
          <BlogPost title="IIBA Perth Volunteer Awards" link='https://lloyd150337.substack.com/p/celebrating-foba-2025-insights-inspiration' description=''/>
          <BlogPost title="The Next Generation of Product Leaders" link='https://lloyd150337.substack.com/p/the-next-generation-product-leader' description=''/>
        </section>

        <section>
          <h2>Books</h2>
          <BlogPost title="From No to How" link='https://lloyd150337.substack.com/p/from-no-to-how' description=''/>
        </section>

      </main>
    </div>
  );
}

export default App;
