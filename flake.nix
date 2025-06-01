{
  description = "Trevor Opiyo's Website Flake";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts/main";
    nixpkgs.url = "github:nixos/nixpkgs/master";
    git-hooks-nix.url = "github:cachix/git-hooks.nix/master";
    treefmt-nix.url = "github:numtide/treefmt-nix/main";
    devenv.url = "github:cachix/devenv/main";
    devenv-root = {
      url = "file+file:///dev/null";
      flake = false;
    };
  };

  outputs = inputs @ {
    flake-parts,
    devenv-root,
    ...
  }:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [
        inputs.treefmt-nix.flakeModule
        inputs.devenv.flakeModule
        inputs.git-hooks-nix.flakeModule
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
        devenv.shells.default = {
          devenv.root = let
            devenvRootFileContent = builtins.readFile devenv-root.outPath;
          in
            pkgs.lib.mkIf (devenvRootFileContent != "") devenvRootFileContent;
          name = "trevoropiyo.com";
          languages.javascript = {
            enable = true;
            bun = {
              enable = true;
              install = {
                enable = true;
              };
            };
          };
          git-hooks = {
            hooks = {
              check-merge-conflicts.enable = true;
              treefmt = {
                enable = true;
                formatters = [
                  pkgs.alejandra
                  pkgs.biome
                ];
              };
            };
          };
        };
      };
    };
}
