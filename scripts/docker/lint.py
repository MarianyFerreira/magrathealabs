#!/usr/bin/python3

from docker.run import run


def usage():
    print("What do you want to lint? <frontend/backend>")


def argument_to_params(arguments):
    if not arguments:
        return
    params = {
        "frontend": ['magrathealabs-frontend', 'yarn', 'run', 'lint'],
        "backend": ['magrathealabs-backend', 'yarn', 'run', 'lint'],
    }
    return params.get(arguments[0])


def lint(arguments):
    print(">>>>>>>>>> Running Linter <<<<<<<<<<")
    param = argument_to_params(arguments)
    if not param:
        return usage()

    return run(param + arguments[1:])
