import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Peer Observation — `,
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-bold">Peer Observation</h2>
      <p className="text-base leading-relaxed">
        During my peer observation within the TESOL program, I had the opportunity to observe multiple classes. This experience allowed me to gain valuable insight into different teachers’ instructional approaches, classroom management strategies, and interaction techniques. It also helped me reflect on effective teaching practices and identify key elements that support student engagement and lesson effectiveness.
        Additionally, I wrote a detailed feedback report for one of my peers, Mrs. Benessalah Mouna, which is included below.
      </p>
      
    <iframe
      src="/document/Peer Observation - Benessalah Mouna.pdf"
      className="w-full h-screen"
    />
    </div>
  );
}