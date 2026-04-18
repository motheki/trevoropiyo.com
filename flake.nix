{
  description = "Trevor Opiyo's Website Flake";

  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/master";
    };
    flake-parts = {
      url = "github:hercules-ci/flake-parts/main";
    };
    devenv = {
      url = "github:cachix/devenv/main";
    };
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.devenv.flakeModule
      ];
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem =
        _:
        {
          devenv.shells.default = {
            name = "trevoropiyo.com";
            cachix = {
              enable = true;
              push = ["motheki"];
            };
            languages = {
              javascript = {
                enable = true;
                lsp = {
                  enable = true;
                };
                bun = {
                  enable = true;
                  install = {
                    enable = true;
                  };
                };
              };
            };
          };
        };
    };
}
