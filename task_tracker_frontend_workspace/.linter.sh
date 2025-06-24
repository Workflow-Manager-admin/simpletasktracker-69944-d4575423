#!/bin/bash
cd /home/kavia/workspace/code-generation/simpletasktracker-69944-d4575423/task_tracker_frontend_workspace/task_tracker_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

