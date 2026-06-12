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
            packages = with pkgs; [
              aube
            ];
            languages = {
              javascript = {
                enable = true;
                lsp = {
                  enable = true;
                };
                bun = {
                  enable = false;
                  install = {
                    enable = false;
                  };
                };
              };
            };
          };
        };
    };
}
