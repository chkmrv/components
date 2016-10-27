module.exports = function(grunt) {

    var fs = require('fs');

    if (!fs.existsSync('CHANGELOG.md')) {
        fs.writeFileSync('CHANGELOG.md', '');
    }

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-conventional-changelog');
    grunt.loadNpmTasks('grunt-shell');

    var commitPartial = fs.readFileSync('changelog-commit.hbs').toString();

    var issueRegex = /(WSSBRF-\d+)/g;
    var angular = require('grunt-conventional-changelog/node_modules/conventional-changelog/presets/angular.js');

    grunt.initConfig({
        bump: {
            options: {
                files: [
                    'package.json'
                ],
                updateConfigs: [],
                commit: true,
                commitMessage: 'chore(ver): v%VERSION%',
                commitFiles: [
                    'package.json',
                    'CHANGELOG.md'
                ],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'chore(ver): v%VERSION%',
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: 'rc',
                regExp: false
            }
        },
        shell: {
            addChangelog: {
                command: 'git add CHANGELOG.md'
            }
        },
        conventionalChangelog: {
            options: {
                changelogOpts: {
                    preset: 'angular'
                },
                writerOpts: {
                    commitPartial: commitPartial,
                    transform: function(commit) {
                        try {

                        if (commit.type === 'feat') {
                            commit.type = 'Features';
                        } else if (commit.type === 'fix') {
                            commit.type = 'Bug Fixes';
                        } else if (commit.type === 'perf') {
                            commit.type = 'Performance Improvements';
                        } else if (commit.type === 'revert') {
                            commit.type = 'Reverts';
                        } else {
                            return;
                        }

                        if (commit.scope === '*') {
                            commit.scope = 'global';
                        }

                        if (typeof commit.hash === 'string') {
                            commit.hash = commit.hash.substring(0, 7);
                        }

                        if (typeof commit.subject === 'string') {
                            commit.subject = commit.subject.substring(0, 80);
                        }

                        commit.notes = commit.notes.map(function(note) {
                            if (note.title === 'BREAKING CHANGE') {
                                note.title = 'BREAKING CHANGES';
                            }

                            return note;
                        });

                        var issues = commit.header.match(issueRegex);

                        if (issues) {
                            commit.references = issues;
                        }

                    } catch(e) { console.error(e)}

                        return commit;
                    }
                }
            },
            release: {
                src: 'CHANGELOG.md'
            }
        }
    });

    grunt.registerTask('release', 'Release a new version', function(target) {
        if (!target) {
            target = 'minor';
        }
        return grunt.task.run(
            'bump-only:' + target,
            'conventionalChangelog',
            'shell:addChangelog',
            'bump-commit'
        );
    });
};
