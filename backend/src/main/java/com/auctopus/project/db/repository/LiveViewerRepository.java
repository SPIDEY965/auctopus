package com.auctopus.project.db.repository;

import com.auctopus.project.db.domain.LiveViewer;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface LiveViewerRepository extends JpaRepository<LiveViewer, String> {

    Optional<LiveViewer> findByViewerEmail(String userEmail);
}
