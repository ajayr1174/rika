import React from "react";

const MissionSection = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Mission Container */}

        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Our Mission
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Mission Statement */}
        <div className="space-y-6 sm:space-y-8">
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
            Our mission at{" "}
            <span className="text-primary font-semibold">RIKA</span> is to
            provide a revolutionary safety device that serves as a beacon of
            protection. We are committed to empowering individuals with the
            tools they need to navigate the world confidently, knowing that they
            are supported by a community dedicated to their well-being.
          </p>

          {/* Key Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
            {/* Protection */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-foreground font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
                Protection
              </h3>
              <p className="text-muted-foreground text-base md:text-lg">
                Revolutionary safety technology
              </p>
            </div>

            {/* Community */}
            <div className="text-center rounded-2xl flex flex-col items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-foreground font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
                Community
              </h3>
              <p className="text-muted-foreground text-base md:text-lg">
                Dedicated support network
              </p>
            </div>

            {/* Confidence */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-foreground font-semibold text-xl md:text-2xl lg:text-3xl mb-2">
                Confidence
              </h3>
              <p className="text-muted-foreground text-base md:text-lg">
                Empowering navigation tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
