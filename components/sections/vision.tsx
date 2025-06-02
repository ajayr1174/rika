import React from "react";

const VisionSection = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Vision Container */}
        <div className="bg-background rounded-2xl p-8 sm:p-10 lg:p-12 border-l-4 border-primary shadow-2xl">
          {/* Header */}
          <div className="mb-8 sm:mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Our Vision
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Vision Statement */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
              At <span className="text-primary font-semibold">RIKA</span>, we
              envision a future where everyone feels secure, heard, and valued,
              regardless of their background or identity.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-7-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
                  Secure
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  Safety for all individuals
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-foreground font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
                  Heard
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  Every voice matters
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-foreground font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
                  Valued
                </h3>
                <p className="text-muted-foreground text-base md:text-lg">
                  Respect for all identities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
