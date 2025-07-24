{
  description = "Trevor Opiyo's Website Flake";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts/main";
    nixpkgs.url = "github:nixos/nixpkgs/master";
    git-hooks-nix.url = "github:cachix/git-hooks.nix/master";
    devenv.url = "github:cachix/devenv/main";
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = [
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
            };
          };
        };
      };
    };
}
