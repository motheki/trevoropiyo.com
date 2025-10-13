{
  description = "Trevor Opiyo's Website Flake";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts/main";
    nixpkgs.url = "github:nixos/nixpkgs/master";
    git-hooks-nix.url = "github:cachix/git-hooks.nix/master";
    devenv.url = "github:cachix/devenv/main";
    nix2container.url = "github:nlewo/nix2container/master";
    mk-shell-bin.url = "github:rrbutani/nix-mk-shell-bin/main";
    treefmt-nix.url = "github:numtide/treefmt-nix/main";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [
        inputs.devenv.flakeModule
        inputs.git-hooks-nix.flakeModule
        inputs.treefmt-nix.flakeModule
      ];
      systems = ["x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin"];
      perSystem = {
        config,
        self',
        inputs',
        pkgs,
        system,
        ...
      }: {
        devenv = {
          shells = {
            default = {
              name = "trevoropiyo.com";
              languages = {
                javascript = {
                  enable = true;
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
        treefmt = {
          flakeFormatter = true;
          programs = {
            biome = {
              enable = true;
              formatUnsafe = true;
            };
            statix = {
              enable = true;
              includes = [
                "*.nix"
              ];
            };
            alejandra = {
              enable = true;
              includes = [
                "*.nix"
              ];
            };
            taplo = {
              enable = true;
              includes = [
                "*.toml"
              ];
            };
          };
        };
        pre-commit = {
          check = {
            enable = true;
          };
          settings = {
            hooks = {
              check-added-large-files = {
                enable = true;
              };
              check-docstring-first = {
                enable = true;
              };
              check-merge-conflicts = {
                enable = true;
              };
              check-yaml = {
                enable = true;
              };
              check-toml = {
                enable = true;
              };
              statix = {
                enable = true;
              };
              html-tidy = {
                enable = true;
              };
              mdformat = {
                enable = true;
              };
              lychee = {
                enable = true;
              };
              biome = {
                enable = true;
                args = [
                  "--unsafe"
                ];
              };
            };
          };
        };
      };
    };
}
