package edu.ivanyou.backend.services;

import edu.ivanyou.backend.model.Backlog;
import edu.ivanyou.backend.model.ProjectTask;
import edu.ivanyou.backend.repositories.BacklogRepository;
import edu.ivanyou.backend.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {
    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
        // PTs should be added to a specific project,(project != null && backlog != null)
        Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
        // set the backlog to project task
        projectTask.setBacklog(backlog);
        //  // we want our project sequence to be: PROJ1-1 PROJ1-2, PROJ1-3
        //  (which means the first, second, third task of project1)
        Integer backlogSequence = backlog.getPTSequence();
        backlogSequence++;
        projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);

        // INITIAL priority when priority null
        if (projectTask.getPriority() == null) {
            projectTask.setPriority(3);
        }
        //INITIAL status to "TO_DO" when status is null
        if (projectTask.getStatus() == null) {
            projectTask.setStatus("TO_DO");
        }

        return projectTaskRepository.save(projectTask);

    }
}
