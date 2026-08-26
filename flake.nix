{
  description = "trevoropiyo.com";

  inputs = {
    nixpkgs = {
      url = "github:nixos/nixpkgs/master";
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
      inputs.nixpkgs.follows = "nixpkgs";
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
      perSystem = _: {
        devenv.shells.default = {
          name = "trevoropiyo.com";
          cachix = {
            enable = true;
            pull = [
              "devenv"
              "nixpkgs"
              "flake-parts"
              "cachix"
            ];
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
          treefmt = {
            enable = true;
            config = {
              programs = {
                alejandra.enable = true;
                deadnix.enable = true;
                statix.enable = true;
                jsonfmt.enable = true;
                oxfmt.enable = true;
              };
            };
          };
        };
      };
    };
}
