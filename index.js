const axios = require('axios')
const core = require('@actions/core')
const github = require('@actions/github')

function extractTaskId(text) {
  const matches = text.match(/open\.htm\?id=(?<id>\d+)$/)
  if (!matches) return
  return matches['id']
}

function run() {
  try {
    const payload = github.context.payload
    if (!payload.pull_request) {
      // this isn't a PR workflow, ignore
      core.setOutput('issue', '')
      return
    }

    const { body, html_url } = payload.pull_request
    const taskId = extractTaskId(body)

    if (!taskId) {
      // there was no wrike issue link in the PR body, ignore
      core.setOutput('issue', '')
      return
    }

    core.debug(`Wrike Task to touch: ${taskId}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
