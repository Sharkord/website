import Image from "next/image";

const NETCUP_REFERRAL_URL = "https://www.netcup.com/en/?ref=221421";

export interface NetcupBannerProps {
  title?: string;
  children?: React.ReactNode;
}

export function NetcupBanner({
  title = "Need a server to run Sharkord on?",
  children,
}: NetcupBannerProps) {
  return (
    <div className="my-6 rounded-lg border border-fd-border p-4">
      <p className="mb-1 font-semibold text-fd-foreground">{title}</p>
      <div className="text-sm leading-6 text-fd-muted-foreground [&_p:last-child]:mb-0">
        {children ?? (
          <p>
            Sharkord runs fine on a small VPS. We use netcup, and their root
            servers start at a few euros a month.
          </p>
        )}
      </div>
      <a
        href={NETCUP_REFERRAL_URL}
        target="_blank"
        rel="noopener sponsored"
        className="mt-3 block w-fit"
      >
        <Image
          src="/netcup-468x60.png"
          alt="netcup: webhosting, domains, vServer and root servers"
          width={468}
          height={60}
          className="h-auto w-full max-w-[468px] rounded"
        />
      </a>
      <p className="mt-2 text-xs text-fd-muted-foreground">
        Referral link. It costs you nothing extra and helps pay for
        Sharkord&apos;s infrastructure. Thank you for your support!
      </p>
    </div>
  );
}
