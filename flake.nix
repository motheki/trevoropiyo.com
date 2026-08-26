{
  description = "Trevor Opiyo's Website Flake";

  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/nixpkgs-unstable";
    };
    flake-parts = {
      url = "github:hercules-ci/flake-parts/main";
    };
    treefmt-nix = {
      url = "github:numtide/treefmt-nix/main";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    devenv = {
      url = "github:cachix/devenv/main";
    };
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [
        inputs.devenv.flakeModule
        inputs.treefmt-nix.flakeModule
      ];
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem = {...}: {
        treefmt = {
          enableDefaultExcludes = true;
          programs = {
            alejandra.enable = true;
            deadnix.enable = true;
            mdformat.enable = true;
            oxfmt.enable = true;
            taplo.enable = true;
          };
        };

        devenv.shells.default = {
          name = "trevoropiyo.com";
          cachix.enable = true;
          languages = {
            nix = {
              enable = true;
              lsp = {
                enable = true;
              };
            };
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
