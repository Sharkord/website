export function CommunityFocusSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Built for Friends, Not Corporations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Sharkord is designed for small groups of friends and intimate
            communities, not massive servers with thousands of users.
          </p>
        </div>

        <div className="bg-muted/50 border rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Why Not Large Communities?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              While Discord is built for large-scale communities with thousands
              of simultaneous users, Sharkord is designed to deliver fast,
              reliable, and meaningful conversations without the noise. We focus
              on simplicity, privacy, and a streamlined chatting experience.
            </p>
            <p className="text-muted-foreground text-pretty">
              Think of it as the difference between a cozy living room and a
              crowded convention center. Both have their place, but Sharkord is
              all about the living room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
