package edu.ivanyou.backend.controller;

import edu.ivanyou.backend.model.ProjectTask;
import edu.ivanyou.backend.services.ProjectTaskService;
import edu.ivanyou.backend.services.ValidationErrorMapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@Controller
@CrossOrigin
@RequestMapping("/api/backlog")
public class BacklogController {

    @Autowired
    private ProjectTaskService projectTaskService;

    @Autowired
    private ValidationErrorMapService validationErrorMapService;

    @PostMapping("/{project_id}")
    public ResponseEntity<?> addPTtoBacklog(@Valid @RequestBody ProjectTask projectTask,
                                            BindingResult result, @PathVariable String project_id) {
        ResponseEntity<?> errorMap = validationErrorMapService.mapValidationError(result);
        if (errorMap != null) return errorMap;

        ProjectTask projectTask1 = projectTaskService.addProjectTask(project_id, projectTask);
        return new ResponseEntity<>(projectTask1, HttpStatus.CREATED);
    }

    @GetMapping("/{project_id}")
    public ResponseEntity<List<ProjectTask>> getProjectTasksByProjectId (@PathVariable String project_id) {
        return new ResponseEntity<>(projectTaskService.findByProjectIdentifier(project_id), HttpStatus.OK);
    }
}
