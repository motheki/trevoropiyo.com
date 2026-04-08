{
  description = "Trevor Opiyo's Website Flake";

  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/master";
    };
    flake-parts = {
      url = "github:hercules-ci/flake-parts/main";
    };
    git-hooks-nix = {
      url = "github:cachix/git-hooks.nix/master";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    devenv = {
      url = "github:cachix/devenv/main";
      inputs.nixpkgs.follows = "nixpkgs";
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
        { pkgs, ... }:
        {
          devenv.shells.default = {
            name = "trevoropiyo.com";
            languages = {
              javascript = {
                enable = true;
                lsp = {
                  enable = true;
                };
                pnpm = {
                  enable = true;
                  package = pkgs.pnpm;
                  install = {
                    enable = true;
                  };
                };
              };
            };
            pre-commit.hooks = {
              check-added-large-files = {
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
              nixfmt-rfc-style = {
                enable = true;
              };
              oxlint = {
                enable = true;
                name = "oxlint";
                entry = "pnpm lint";
                pass_filenames = false;
              };
              oxfmt = {
                enable = true;
                name = "oxfmt";
                entry = "pnpm fmt";
                pass_filenames = false;
              };
            };
          };
        };
    };
}
