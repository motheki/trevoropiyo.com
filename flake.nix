{
  description = "Trevor Opiyo's Website Flake";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts/main";
    nixpkgs.url = "github:numtide/nixpkgs-unfree?ref=main";
    treefmt-nix.url = "github:numtide/treefmt-nix/main";
    devenv.url = "github:cachix/devenv";
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
        devenv.shells.default = {
          devenv.root = let
            devenvRootFileContent = builtins.readFile devenv-root.outPath;
          in
            pkgs.lib.mkIf (devenvRootFileContent != "") devenvRootFileContent;
          #packages = [config.packages.default];
          name = "trevoropiyo.com";
          languages.javascript.enable = true;
          languages.javascript.bun.install.enable = true;
          languages.javascript.bun.enable = true;
          languages.typescript.enable = true;
        };
      };
    };
}
