{
  description = "Trevor Opiyo's Website Flake";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts/main";
    nixpkgs.url = "github:numtide/nixpkgs-unfree?ref=main";
    treefmt-nix.url = "github:numtide/treefmt-nix/main";
    devshell.url = "github:numtide/devshell";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [
        inputs.treefmt-nix.flakeModule
        inputs.devshell.flakeModule
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
        treefmt = {
          programs = {
            ruff-format.enable = true;
            ruff-check.enable = true;
            alejandra.enable = true;
            biome.enable = true;
          };
        };
        devshells.default = {
          packages = with pkgs; [
            bun
          ];
          name = "trevoropiyo.com";
        };
      };
    };
}
