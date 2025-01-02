/**
 * View 간의 의존성 관계를 정의합니다.
 * key: view 이름
 * value: 해당 view가 의존하는 다른 view들의 배열
 */
export const VIEW_DEPENDENCIES = {
  'v_device': ['v_client_hierarchy'],
  'v_device_install_info': ['v_device']
}