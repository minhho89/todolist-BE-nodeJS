CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,  -- Cột id là khóa chính, tự động tăng (auto-increment)
    title VARCHAR(255) NOT NULL,  -- Cột tiêu đề nhiệm vụ, bắt buộc nhập
    description TEXT,  -- Cột mô tả nhiệm vụ, có thể không nhập
    status VARCHAR(50) DEFAULT 'pending',  -- Trạng thái nhiệm vụ (pending, completed, etc.), mặc định là 'pending'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Ngày giờ tạo nhiệm vụ, mặc định là thời gian hiện tại
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Ngày giờ cập nhật nhiệm vụ, mặc định là thời gian hiện tại
);