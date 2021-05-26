const axios = require('axios')
const core = require('@actions/core')
const github = require('@actions/github')

function extractTaskId(text) {
  const matches = text.match(/open\.htm\?id=(\d+)/)
  if (!matches) return
  return matches['id']
}

function run() {
  try {
    const payload = github.context.payload
    if (!payload.pull_request) {
      // this isn't a PR workflow, ignore
      console.log('No pull_request in payload')
      core.setOutput('issue', '')
      return
    }

    const { body, html_url } = payload.pull_request
    const taskId = extractTaskId(body)

    if (!taskId) {
      console.log('No task link in PR text')
      // there was no wrike issue link in the PR body, ignore
      core.setOutput('issue', '')
      return
    }

    console.log(`Wrike Task to touch: ${taskId}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
