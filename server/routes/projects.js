const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  addTaskToProject,
  getProjectMembers,
  addMemberToProject,
  removeMemberFromProject,
} = require('../controllers/projectController');
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasksController');

// /api/v1/projects
router.route('/')
      .get(auth, getAllProjects)
      .post(auth, createProject);

// /api/v1/projects/:projectId
router.route('/:projectId')
      .get(auth, getProject)
      .patch(auth, updateProject)
      .delete(auth, deleteProject);

// /api/v1/projects/:projectId/members
router.route('/:projectId/members')
      .get(auth, getProjectMembers)
      .post(auth, addMemberToProject)
      .delete(auth, removeMemberFromProject);

// /api/v1/projects/:projectId/tasks
router.route('/:projectId/tasks')
      .get(auth, getAllTasks)
      .post(auth, createTask);

// /api/v1/projects/:projectId/tasks/:taskId
router.route('/:projectId/tasks/:taskId')
      .get(auth, getTask)
      .patch(auth, updateTask)
      .delete(auth, deleteTask);

module.exports = router;
