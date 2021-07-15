// https://www.terraform.io/docs/providers/docker/r/service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the service
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#name Service#name}
  */
  readonly name: string;
  /**
  * auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#auth Service#auth}
  */
  readonly auth?: ServiceAuth[];
  /**
  * converge_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#converge_config Service#converge_config}
  */
  readonly convergeConfig?: ServiceConvergeConfig[];
  /**
  * endpoint_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#endpoint_spec Service#endpoint_spec}
  */
  readonly endpointSpec?: ServiceEndpointSpec[];
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#labels Service#labels}
  */
  readonly labels?: ServiceLabels[];
  /**
  * mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#mode Service#mode}
  */
  readonly mode?: ServiceMode[];
  /**
  * rollback_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#rollback_config Service#rollback_config}
  */
  readonly rollbackConfig?: ServiceRollbackConfig[];
  /**
  * task_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#task_spec Service#task_spec}
  */
  readonly taskSpec: ServiceTaskSpec[];
  /**
  * update_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#update_config Service#update_config}
  */
  readonly updateConfig?: ServiceUpdateConfig[];
}
export interface ServiceAuth {
  /**
  * The password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#password Service#password}
  */
  readonly password?: string;
  /**
  * The address of the server for the authentication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#server_address Service#server_address}
  */
  readonly serverAddress: string;
  /**
  * The username
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#username Service#username}
  */
  readonly username?: string;
}

function serviceAuthToTerraform(struct?: ServiceAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface ServiceConvergeConfig {
  /**
  * The interval to check if the desired state is reached (ms|s). Defaults to `7s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#delay Service#delay}
  */
  readonly delay?: string;
  /**
  * The timeout of the service to reach the desired state (s|m). Defaults to `3m`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#timeout Service#timeout}
  */
  readonly timeout?: string;
}

function serviceConvergeConfigToTerraform(struct?: ServiceConvergeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export interface ServiceEndpointSpecPorts {
  /**
  * A random name for the port
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#name Service#name}
  */
  readonly name?: string;
  /**
  * Rrepresents the protocol of a port: 'tcp', 'udp' or 'sctp'. Defaults to `tcp`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#protocol Service#protocol}
  */
  readonly protocol?: string;
  /**
  * Represents the mode in which the port is to be published: 'ingress' or 'host'. Defaults to `ingress`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#publish_mode Service#publish_mode}
  */
  readonly publishMode?: string;
  /**
  * The port on the swarm hosts
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#published_port Service#published_port}
  */
  readonly publishedPort?: number;
  /**
  * The port inside the container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#target_port Service#target_port}
  */
  readonly targetPort: number;
}

function serviceEndpointSpecPortsToTerraform(struct?: ServiceEndpointSpecPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    publish_mode: cdktf.stringToTerraform(struct!.publishMode),
    published_port: cdktf.numberToTerraform(struct!.publishedPort),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}

export interface ServiceEndpointSpec {
  /**
  * The mode of resolution to use for internal load balancing between tasks
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#mode Service#mode}
  */
  readonly mode?: string;
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#ports Service#ports}
  */
  readonly ports?: ServiceEndpointSpecPorts[];
}

function serviceEndpointSpecToTerraform(struct?: ServiceEndpointSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    ports: cdktf.listMapper(serviceEndpointSpecPortsToTerraform)(struct!.ports),
  }
}

export interface ServiceLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#label Service#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#value Service#value}
  */
  readonly value: string;
}

function serviceLabelsToTerraform(struct?: ServiceLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceModeReplicated {
  /**
  * The amount of replicas of the service. Defaults to `1`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#replicas Service#replicas}
  */
  readonly replicas?: number;
}

function serviceModeReplicatedToTerraform(struct?: ServiceModeReplicated): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}

export interface ServiceMode {
  /**
  * The global service mode. Defaults to `false`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#global Service#global}
  */
  readonly global?: boolean;
  /**
  * replicated block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#replicated Service#replicated}
  */
  readonly replicated?: ServiceModeReplicated[];
}

function serviceModeToTerraform(struct?: ServiceMode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    global: cdktf.booleanToTerraform(struct!.global),
    replicated: cdktf.listMapper(serviceModeReplicatedToTerraform)(struct!.replicated),
  }
}

export interface ServiceRollbackConfig {
  /**
  * Delay between task rollbacks (ns|us|ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#delay Service#delay}
  */
  readonly delay?: string;
  /**
  * Action on rollback failure: pause | continue. Defaults to `pause`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#failure_action Service#failure_action}
  */
  readonly failureAction?: string;
  /**
  * Failure rate to tolerate during a rollback. Defaults to `0.0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#max_failure_ratio Service#max_failure_ratio}
  */
  readonly maxFailureRatio?: string;
  /**
  * Duration after each task rollback to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#monitor Service#monitor}
  */
  readonly monitor?: string;
  /**
  * Rollback order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#order Service#order}
  */
  readonly order?: string;
  /**
  * Maximum number of tasks to be rollbacked in one iteration. Defaults to `1`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#parallelism Service#parallelism}
  */
  readonly parallelism?: number;
}

function serviceRollbackConfigToTerraform(struct?: ServiceRollbackConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    failure_action: cdktf.stringToTerraform(struct!.failureAction),
    max_failure_ratio: cdktf.stringToTerraform(struct!.maxFailureRatio),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    order: cdktf.stringToTerraform(struct!.order),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
  }
}

export interface ServiceTaskSpecContainerSpecConfigs {
  /**
  * ID of the specific config that we're referencing
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#config_id Service#config_id}
  */
  readonly configId: string;
  /**
  * Name of the config that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#config_name Service#config_name}
  */
  readonly configName?: string;
  /**
  * Represents the file GID. Defaults to `0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_gid Service#file_gid}
  */
  readonly fileGid?: string;
  /**
  * Represents represents the FileMode of the file. Defaults to `0o444`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_mode Service#file_mode}
  */
  readonly fileMode?: number;
  /**
  * Represents the final filename in the filesystem
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_name Service#file_name}
  */
  readonly fileName: string;
  /**
  * Represents the file UID. Defaults to `0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_uid Service#file_uid}
  */
  readonly fileUid?: string;
}

function serviceTaskSpecContainerSpecConfigsToTerraform(struct?: ServiceTaskSpecContainerSpecConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_id: cdktf.stringToTerraform(struct!.configId),
    config_name: cdktf.stringToTerraform(struct!.configName),
    file_gid: cdktf.stringToTerraform(struct!.fileGid),
    file_mode: cdktf.numberToTerraform(struct!.fileMode),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_uid: cdktf.stringToTerraform(struct!.fileUid),
  }
}

export interface ServiceTaskSpecContainerSpecDnsConfig {
  /**
  * The IP addresses of the name servers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#nameservers Service#nameservers}
  */
  readonly nameservers: string[];
  /**
  * A list of internal resolver variables to be modified (e.g., debug, ndots:3, etc.)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#options Service#options}
  */
  readonly options?: string[];
  /**
  * A search list for host-name lookup
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#search Service#search}
  */
  readonly search?: string[];
}

function serviceTaskSpecContainerSpecDnsConfigToTerraform(struct?: ServiceTaskSpecContainerSpecDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nameservers),
    options: cdktf.listMapper(cdktf.stringToTerraform)(struct!.options),
    search: cdktf.listMapper(cdktf.stringToTerraform)(struct!.search),
  }
}

export interface ServiceTaskSpecContainerSpecHealthcheck {
  /**
  * Time between running the check (ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#interval Service#interval}
  */
  readonly interval?: string;
  /**
  * Consecutive failures needed to report unhealthy. Defaults to `0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#retries Service#retries}
  */
  readonly retries?: number;
  /**
  * Start period for the container to initialize before counting retries towards unstable (ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#start_period Service#start_period}
  */
  readonly startPeriod?: string;
  /**
  * The test to perform as list
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#test Service#test}
  */
  readonly test: string[];
  /**
  * Maximum time to allow one check to run (ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#timeout Service#timeout}
  */
  readonly timeout?: string;
}

function serviceTaskSpecContainerSpecHealthcheckToTerraform(struct?: ServiceTaskSpecContainerSpecHealthcheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    retries: cdktf.numberToTerraform(struct!.retries),
    start_period: cdktf.stringToTerraform(struct!.startPeriod),
    test: cdktf.listMapper(cdktf.stringToTerraform)(struct!.test),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}

export interface ServiceTaskSpecContainerSpecHosts {
  /**
  * The name of the host
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#host Service#host}
  */
  readonly host: string;
  /**
  * The ip of the host
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#ip Service#ip}
  */
  readonly ip: string;
}

function serviceTaskSpecContainerSpecHostsToTerraform(struct?: ServiceTaskSpecContainerSpecHosts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}

export interface ServiceTaskSpecContainerSpecLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#label Service#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#value Service#value}
  */
  readonly value: string;
}

function serviceTaskSpecContainerSpecLabelsToTerraform(struct?: ServiceTaskSpecContainerSpecLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceTaskSpecContainerSpecMountsBindOptions {
  /**
  * Bind propagation refers to whether or not mounts created within a given bind-mount or named volume can be propagated to replicas of that mount. See the [docs](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation) for details. Defaults to `rprivate`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#propagation Service#propagation}
  */
  readonly propagation?: string;
}

function serviceTaskSpecContainerSpecMountsBindOptionsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsBindOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    propagation: cdktf.stringToTerraform(struct!.propagation),
  }
}

export interface ServiceTaskSpecContainerSpecMountsTmpfsOptions {
  /**
  * The permission mode for the tmpfs mount in an integer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#mode Service#mode}
  */
  readonly mode?: number;
  /**
  * The size for the tmpfs mount in bytes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#size_bytes Service#size_bytes}
  */
  readonly sizeBytes?: number;
}

function serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsTmpfsOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    size_bytes: cdktf.numberToTerraform(struct!.sizeBytes),
  }
}

export interface ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels {
  /**
  * Name of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#label Service#label}
  */
  readonly label: string;
  /**
  * Value of the label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#value Service#value}
  */
  readonly value: string;
}

function serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServiceTaskSpecContainerSpecMountsVolumeOptions {
  /**
  * Name of the driver to use to create the volume
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#driver_name Service#driver_name}
  */
  readonly driverName?: string;
  /**
  * key/value map of driver specific options
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#driver_options Service#driver_options}
  */
  readonly driverOptions?: { [key: string]: string };
  /**
  * Populate volume with data from the target
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#no_copy Service#no_copy}
  */
  readonly noCopy?: boolean;
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#labels Service#labels}
  */
  readonly labels?: ServiceTaskSpecContainerSpecMountsVolumeOptionsLabels[];
}

function serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform(struct?: ServiceTaskSpecContainerSpecMountsVolumeOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver_name: cdktf.stringToTerraform(struct!.driverName),
    driver_options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverOptions),
    no_copy: cdktf.booleanToTerraform(struct!.noCopy),
    labels: cdktf.listMapper(serviceTaskSpecContainerSpecMountsVolumeOptionsLabelsToTerraform)(struct!.labels),
  }
}

export interface ServiceTaskSpecContainerSpecMounts {
  /**
  * Whether the mount should be read-only
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#read_only Service#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Mount source (e.g. a volume name, a host path)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#source Service#source}
  */
  readonly source?: string;
  /**
  * Container path
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#target Service#target}
  */
  readonly target: string;
  /**
  * The mount type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#type Service#type}
  */
  readonly type: string;
  /**
  * bind_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#bind_options Service#bind_options}
  */
  readonly bindOptions?: ServiceTaskSpecContainerSpecMountsBindOptions[];
  /**
  * tmpfs_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#tmpfs_options Service#tmpfs_options}
  */
  readonly tmpfsOptions?: ServiceTaskSpecContainerSpecMountsTmpfsOptions[];
  /**
  * volume_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#volume_options Service#volume_options}
  */
  readonly volumeOptions?: ServiceTaskSpecContainerSpecMountsVolumeOptions[];
}

function serviceTaskSpecContainerSpecMountsToTerraform(struct?: ServiceTaskSpecContainerSpecMounts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    bind_options: cdktf.listMapper(serviceTaskSpecContainerSpecMountsBindOptionsToTerraform)(struct!.bindOptions),
    tmpfs_options: cdktf.listMapper(serviceTaskSpecContainerSpecMountsTmpfsOptionsToTerraform)(struct!.tmpfsOptions),
    volume_options: cdktf.listMapper(serviceTaskSpecContainerSpecMountsVolumeOptionsToTerraform)(struct!.volumeOptions),
  }
}

export interface ServiceTaskSpecContainerSpecPrivilegesCredentialSpec {
  /**
  * Load credential spec from this file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file Service#file}
  */
  readonly file?: string;
  /**
  * Load credential spec from this value in the Windows registry
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#registry Service#registry}
  */
  readonly registry?: string;
}

function serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    registry: cdktf.stringToTerraform(struct!.registry),
  }
}

export interface ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext {
  /**
  * Disable SELinux
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#disable Service#disable}
  */
  readonly disable?: boolean;
  /**
  * SELinux level label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#level Service#level}
  */
  readonly level?: string;
  /**
  * SELinux role label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#role Service#role}
  */
  readonly role?: string;
  /**
  * SELinux type label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#type Service#type}
  */
  readonly type?: string;
  /**
  * SELinux user label
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#user Service#user}
  */
  readonly user?: string;
}

function serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform(struct?: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface ServiceTaskSpecContainerSpecPrivileges {
  /**
  * credential_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#credential_spec Service#credential_spec}
  */
  readonly credentialSpec?: ServiceTaskSpecContainerSpecPrivilegesCredentialSpec[];
  /**
  * se_linux_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#se_linux_context Service#se_linux_context}
  */
  readonly seLinuxContext?: ServiceTaskSpecContainerSpecPrivilegesSeLinuxContext[];
}

function serviceTaskSpecContainerSpecPrivilegesToTerraform(struct?: ServiceTaskSpecContainerSpecPrivileges): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    credential_spec: cdktf.listMapper(serviceTaskSpecContainerSpecPrivilegesCredentialSpecToTerraform)(struct!.credentialSpec),
    se_linux_context: cdktf.listMapper(serviceTaskSpecContainerSpecPrivilegesSeLinuxContextToTerraform)(struct!.seLinuxContext),
  }
}

export interface ServiceTaskSpecContainerSpecSecrets {
  /**
  * Represents the file GID. Defaults to `0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_gid Service#file_gid}
  */
  readonly fileGid?: string;
  /**
  * Represents represents the FileMode of the file. Defaults to `0o444`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_mode Service#file_mode}
  */
  readonly fileMode?: number;
  /**
  * Represents the final filename in the filesystem
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_name Service#file_name}
  */
  readonly fileName: string;
  /**
  * Represents the file UID. Defaults to `0`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#file_uid Service#file_uid}
  */
  readonly fileUid?: string;
  /**
  * ID of the specific secret that we're referencing
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#secret_id Service#secret_id}
  */
  readonly secretId: string;
  /**
  * Name of the secret that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#secret_name Service#secret_name}
  */
  readonly secretName?: string;
}

function serviceTaskSpecContainerSpecSecretsToTerraform(struct?: ServiceTaskSpecContainerSpecSecrets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_gid: cdktf.stringToTerraform(struct!.fileGid),
    file_mode: cdktf.numberToTerraform(struct!.fileMode),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_uid: cdktf.stringToTerraform(struct!.fileUid),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export interface ServiceTaskSpecContainerSpec {
  /**
  * Arguments to the command
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#args Service#args}
  */
  readonly args?: string[];
  /**
  * The command/entrypoint to be run in the image. According to the [docker cli](https://github.com/docker/cli/blob/v20.10.7/cli/command/service/opts.go#L705) the override of the entrypoint is also passed to the `command` property and there is no `entrypoint` attribute in the `ContainerSpec` of the service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#command Service#command}
  */
  readonly command?: string[];
  /**
  * The working directory for commands to run in
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#dir Service#dir}
  */
  readonly dir?: string;
  /**
  * A list of environment variables in the form VAR="value"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#env Service#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * A list of additional groups that the container process will run as
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#groups Service#groups}
  */
  readonly groups?: string[];
  /**
  * The hostname to use for the container, as a valid RFC 1123 hostname
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#hostname Service#hostname}
  */
  readonly hostname?: string;
  /**
  * The image name to use for the containers of the service, like `nginx:1.17.6`. Also use the data-source or resource of `docker_image` with the `repo_digest` or `docker_registry_image` with the `name` attribute for this, as shown in the examples.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#image Service#image}
  */
  readonly image: string;
  /**
  * Isolation technology of the containers running the service. (Windows only). Defaults to `default`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#isolation Service#isolation}
  */
  readonly isolation?: string;
  /**
  * Mount the container's root filesystem as read only
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#read_only Service#read_only}
  */
  readonly readOnly?: boolean;
  /**
  * Amount of time to wait for the container to terminate before forcefully removing it (ms|s|m|h). If not specified or '0s' the destroy will not check if all tasks/containers of the service terminate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#stop_grace_period Service#stop_grace_period}
  */
  readonly stopGracePeriod?: string;
  /**
  * Signal to stop the container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#stop_signal Service#stop_signal}
  */
  readonly stopSignal?: string;
  /**
  * The user inside the container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#user Service#user}
  */
  readonly user?: string;
  /**
  * configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#configs Service#configs}
  */
  readonly configs?: ServiceTaskSpecContainerSpecConfigs[];
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#dns_config Service#dns_config}
  */
  readonly dnsConfig?: ServiceTaskSpecContainerSpecDnsConfig[];
  /**
  * healthcheck block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#healthcheck Service#healthcheck}
  */
  readonly healthcheck?: ServiceTaskSpecContainerSpecHealthcheck[];
  /**
  * hosts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#hosts Service#hosts}
  */
  readonly hosts?: ServiceTaskSpecContainerSpecHosts[];
  /**
  * labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#labels Service#labels}
  */
  readonly labels?: ServiceTaskSpecContainerSpecLabels[];
  /**
  * mounts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#mounts Service#mounts}
  */
  readonly mounts?: ServiceTaskSpecContainerSpecMounts[];
  /**
  * privileges block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#privileges Service#privileges}
  */
  readonly privileges?: ServiceTaskSpecContainerSpecPrivileges[];
  /**
  * secrets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#secrets Service#secrets}
  */
  readonly secrets?: ServiceTaskSpecContainerSpecSecrets[];
}

function serviceTaskSpecContainerSpecToTerraform(struct?: ServiceTaskSpecContainerSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    dir: cdktf.stringToTerraform(struct!.dir),
    env: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.env),
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    image: cdktf.stringToTerraform(struct!.image),
    isolation: cdktf.stringToTerraform(struct!.isolation),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    stop_grace_period: cdktf.stringToTerraform(struct!.stopGracePeriod),
    stop_signal: cdktf.stringToTerraform(struct!.stopSignal),
    user: cdktf.stringToTerraform(struct!.user),
    configs: cdktf.listMapper(serviceTaskSpecContainerSpecConfigsToTerraform)(struct!.configs),
    dns_config: cdktf.listMapper(serviceTaskSpecContainerSpecDnsConfigToTerraform)(struct!.dnsConfig),
    healthcheck: cdktf.listMapper(serviceTaskSpecContainerSpecHealthcheckToTerraform)(struct!.healthcheck),
    hosts: cdktf.listMapper(serviceTaskSpecContainerSpecHostsToTerraform)(struct!.hosts),
    labels: cdktf.listMapper(serviceTaskSpecContainerSpecLabelsToTerraform)(struct!.labels),
    mounts: cdktf.listMapper(serviceTaskSpecContainerSpecMountsToTerraform)(struct!.mounts),
    privileges: cdktf.listMapper(serviceTaskSpecContainerSpecPrivilegesToTerraform)(struct!.privileges),
    secrets: cdktf.listMapper(serviceTaskSpecContainerSpecSecretsToTerraform)(struct!.secrets),
  }
}

export interface ServiceTaskSpecLogDriver {
  /**
  * The logging driver to use
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#name Service#name}
  */
  readonly name: string;
  /**
  * The options for the logging driver
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#options Service#options}
  */
  readonly options?: { [key: string]: string };
}

function serviceTaskSpecLogDriverToTerraform(struct?: ServiceTaskSpecLogDriver): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.options),
  }
}

export interface ServiceTaskSpecPlacementPlatforms {
  /**
  * The architecture, e.g. `amd64`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#architecture Service#architecture}
  */
  readonly architecture: string;
  /**
  * The operation system, e.g. `linux`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#os Service#os}
  */
  readonly os: string;
}

function serviceTaskSpecPlacementPlatformsToTerraform(struct?: ServiceTaskSpecPlacementPlatforms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    os: cdktf.stringToTerraform(struct!.os),
  }
}

export interface ServiceTaskSpecPlacement {
  /**
  * An array of constraints. e.g.: `node.role==manager`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#constraints Service#constraints}
  */
  readonly constraints?: string[];
  /**
  * Maximum number of replicas for per node (default value is `0`, which is unlimited)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#max_replicas Service#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Preferences provide a way to make the scheduler aware of factors such as topology. They are provided in order from highest to lowest precedence, e.g.: spread=node.role.manager
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#prefs Service#prefs}
  */
  readonly prefs?: string[];
  /**
  * platforms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#platforms Service#platforms}
  */
  readonly platforms?: ServiceTaskSpecPlacementPlatforms[];
}

function serviceTaskSpecPlacementToTerraform(struct?: ServiceTaskSpecPlacement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    constraints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.constraints),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    prefs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.prefs),
    platforms: cdktf.listMapper(serviceTaskSpecPlacementPlatformsToTerraform)(struct!.platforms),
  }
}

export interface ServiceTaskSpecResourcesLimits {
  /**
  * The amounf of memory in bytes the container allocates
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#memory_bytes Service#memory_bytes}
  */
  readonly memoryBytes?: number;
  /**
  * CPU shares in units of `1/1e9` (or `10^-9`) of the CPU. Should be at least 1000000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#nano_cpus Service#nano_cpus}
  */
  readonly nanoCpus?: number;
}

function serviceTaskSpecResourcesLimitsToTerraform(struct?: ServiceTaskSpecResourcesLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    memory_bytes: cdktf.numberToTerraform(struct!.memoryBytes),
    nano_cpus: cdktf.numberToTerraform(struct!.nanoCpus),
  }
}

export interface ServiceTaskSpecResourcesReservationGenericResources {
  /**
  * The Integer resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#discrete_resources_spec Service#discrete_resources_spec}
  */
  readonly discreteResourcesSpec?: string[];
  /**
  * The String resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#named_resources_spec Service#named_resources_spec}
  */
  readonly namedResourcesSpec?: string[];
}

function serviceTaskSpecResourcesReservationGenericResourcesToTerraform(struct?: ServiceTaskSpecResourcesReservationGenericResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    discrete_resources_spec: cdktf.listMapper(cdktf.stringToTerraform)(struct!.discreteResourcesSpec),
    named_resources_spec: cdktf.listMapper(cdktf.stringToTerraform)(struct!.namedResourcesSpec),
  }
}

export interface ServiceTaskSpecResourcesReservation {
  /**
  * The amounf of memory in bytes the container allocates
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#memory_bytes Service#memory_bytes}
  */
  readonly memoryBytes?: number;
  /**
  * CPU shares in units of 1/1e9 (or 10^-9) of the CPU. Should be at least 1000000
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#nano_cpus Service#nano_cpus}
  */
  readonly nanoCpus?: number;
  /**
  * generic_resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#generic_resources Service#generic_resources}
  */
  readonly genericResources?: ServiceTaskSpecResourcesReservationGenericResources[];
}

function serviceTaskSpecResourcesReservationToTerraform(struct?: ServiceTaskSpecResourcesReservation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    memory_bytes: cdktf.numberToTerraform(struct!.memoryBytes),
    nano_cpus: cdktf.numberToTerraform(struct!.nanoCpus),
    generic_resources: cdktf.listMapper(serviceTaskSpecResourcesReservationGenericResourcesToTerraform)(struct!.genericResources),
  }
}

export interface ServiceTaskSpecResources {
  /**
  * limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#limits Service#limits}
  */
  readonly limits?: ServiceTaskSpecResourcesLimits[];
  /**
  * reservation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#reservation Service#reservation}
  */
  readonly reservation?: ServiceTaskSpecResourcesReservation[];
}

function serviceTaskSpecResourcesToTerraform(struct?: ServiceTaskSpecResources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limits: cdktf.listMapper(serviceTaskSpecResourcesLimitsToTerraform)(struct!.limits),
    reservation: cdktf.listMapper(serviceTaskSpecResourcesReservationToTerraform)(struct!.reservation),
  }
}

export interface ServiceTaskSpecRestartPolicy {
  /**
  * Condition for restart
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#condition Service#condition}
  */
  readonly condition?: string;
  /**
  * Delay between restart attempts (ms|s|m|h)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#delay Service#delay}
  */
  readonly delay?: string;
  /**
  * Maximum attempts to restart a given container before giving up (default value is `0`, which is ignored)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#max_attempts Service#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * The time window used to evaluate the restart policy (default value is `0`, which is unbounded) (ms|s|m|h)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#window Service#window}
  */
  readonly window?: string;
}

function serviceTaskSpecRestartPolicyToTerraform(struct?: ServiceTaskSpecRestartPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    delay: cdktf.stringToTerraform(struct!.delay),
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    window: cdktf.stringToTerraform(struct!.window),
  }
}

export interface ServiceTaskSpec {
  /**
  * A counter that triggers an update even if no relevant parameters have been changed. See the [spec](https://github.com/docker/swarmkit/blob/master/api/specs.proto#L126).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#force_update Service#force_update}
  */
  readonly forceUpdate?: number;
  /**
  * Ids of the networks in which the  container will be put in
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#networks Service#networks}
  */
  readonly networks?: string[];
  /**
  * Runtime is the type of runtime specified for the task executor. See the [types](https://github.com/moby/moby/blob/master/api/types/swarm/runtime.go).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#runtime Service#runtime}
  */
  readonly runtime?: string;
  /**
  * container_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#container_spec Service#container_spec}
  */
  readonly containerSpec: ServiceTaskSpecContainerSpec[];
  /**
  * log_driver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#log_driver Service#log_driver}
  */
  readonly logDriver?: ServiceTaskSpecLogDriver[];
  /**
  * placement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#placement Service#placement}
  */
  readonly placement?: ServiceTaskSpecPlacement[];
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#resources Service#resources}
  */
  readonly resources?: ServiceTaskSpecResources[];
  /**
  * restart_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#restart_policy Service#restart_policy}
  */
  readonly restartPolicy?: ServiceTaskSpecRestartPolicy[];
}

function serviceTaskSpecToTerraform(struct?: ServiceTaskSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    force_update: cdktf.numberToTerraform(struct!.forceUpdate),
    networks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.networks),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    container_spec: cdktf.listMapper(serviceTaskSpecContainerSpecToTerraform)(struct!.containerSpec),
    log_driver: cdktf.listMapper(serviceTaskSpecLogDriverToTerraform)(struct!.logDriver),
    placement: cdktf.listMapper(serviceTaskSpecPlacementToTerraform)(struct!.placement),
    resources: cdktf.listMapper(serviceTaskSpecResourcesToTerraform)(struct!.resources),
    restart_policy: cdktf.listMapper(serviceTaskSpecRestartPolicyToTerraform)(struct!.restartPolicy),
  }
}

export interface ServiceUpdateConfig {
  /**
  * Delay between task updates (ns|us|ms|s|m|h). Defaults to `0s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#delay Service#delay}
  */
  readonly delay?: string;
  /**
  * Action on update failure: pause | continue | rollback. Defaults to `pause`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#failure_action Service#failure_action}
  */
  readonly failureAction?: string;
  /**
  * Failure rate to tolerate during an update. Defaults to `0.0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#max_failure_ratio Service#max_failure_ratio}
  */
  readonly maxFailureRatio?: string;
  /**
  * Duration after each task update to monitor for failure (ns|us|ms|s|m|h). Defaults to `5s`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#monitor Service#monitor}
  */
  readonly monitor?: string;
  /**
  * Update order: either 'stop-first' or 'start-first'. Defaults to `stop-first`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#order Service#order}
  */
  readonly order?: string;
  /**
  * Maximum number of tasks to be updated in one iteration. Defaults to `1`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/service.html#parallelism Service#parallelism}
  */
  readonly parallelism?: number;
}

function serviceUpdateConfigToTerraform(struct?: ServiceUpdateConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delay: cdktf.stringToTerraform(struct!.delay),
    failure_action: cdktf.stringToTerraform(struct!.failureAction),
    max_failure_ratio: cdktf.stringToTerraform(struct!.maxFailureRatio),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    order: cdktf.stringToTerraform(struct!.order),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/service.html docker_service}
*/
export class Service extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/service.html docker_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_service',
      terraformGeneratorMetadata: {
        providerName: 'docker'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._auth = config.auth;
    this._convergeConfig = config.convergeConfig;
    this._endpointSpec = config.endpointSpec;
    this._labels = config.labels;
    this._mode = config.mode;
    this._rollbackConfig = config.rollbackConfig;
    this._taskSpec = config.taskSpec;
    this._updateConfig = config.updateConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: ServiceAuth[];
  public get auth() {
    return this.interpolationForAttribute('auth') as any;
  }
  public set auth(value: ServiceAuth[] ) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth
  }

  // converge_config - computed: false, optional: true, required: false
  private _convergeConfig?: ServiceConvergeConfig[];
  public get convergeConfig() {
    return this.interpolationForAttribute('converge_config') as any;
  }
  public set convergeConfig(value: ServiceConvergeConfig[] ) {
    this._convergeConfig = value;
  }
  public resetConvergeConfig() {
    this._convergeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergeConfigInput() {
    return this._convergeConfig
  }

  // endpoint_spec - computed: false, optional: true, required: false
  private _endpointSpec?: ServiceEndpointSpec[];
  public get endpointSpec() {
    return this.interpolationForAttribute('endpoint_spec') as any;
  }
  public set endpointSpec(value: ServiceEndpointSpec[] ) {
    this._endpointSpec = value;
  }
  public resetEndpointSpec() {
    this._endpointSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSpecInput() {
    return this._endpointSpec
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: ServiceLabels[];
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: ServiceLabels[] ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: ServiceMode[];
  public get mode() {
    return this.interpolationForAttribute('mode') as any;
  }
  public set mode(value: ServiceMode[] ) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // rollback_config - computed: false, optional: true, required: false
  private _rollbackConfig?: ServiceRollbackConfig[];
  public get rollbackConfig() {
    return this.interpolationForAttribute('rollback_config') as any;
  }
  public set rollbackConfig(value: ServiceRollbackConfig[] ) {
    this._rollbackConfig = value;
  }
  public resetRollbackConfig() {
    this._rollbackConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackConfigInput() {
    return this._rollbackConfig
  }

  // task_spec - computed: false, optional: false, required: true
  private _taskSpec: ServiceTaskSpec[];
  public get taskSpec() {
    return this.interpolationForAttribute('task_spec') as any;
  }
  public set taskSpec(value: ServiceTaskSpec[]) {
    this._taskSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSpecInput() {
    return this._taskSpec
  }

  // update_config - computed: false, optional: true, required: false
  private _updateConfig?: ServiceUpdateConfig[];
  public get updateConfig() {
    return this.interpolationForAttribute('update_config') as any;
  }
  public set updateConfig(value: ServiceUpdateConfig[] ) {
    this._updateConfig = value;
  }
  public resetUpdateConfig() {
    this._updateConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateConfigInput() {
    return this._updateConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      auth: cdktf.listMapper(serviceAuthToTerraform)(this._auth),
      converge_config: cdktf.listMapper(serviceConvergeConfigToTerraform)(this._convergeConfig),
      endpoint_spec: cdktf.listMapper(serviceEndpointSpecToTerraform)(this._endpointSpec),
      labels: cdktf.listMapper(serviceLabelsToTerraform)(this._labels),
      mode: cdktf.listMapper(serviceModeToTerraform)(this._mode),
      rollback_config: cdktf.listMapper(serviceRollbackConfigToTerraform)(this._rollbackConfig),
      task_spec: cdktf.listMapper(serviceTaskSpecToTerraform)(this._taskSpec),
      update_config: cdktf.listMapper(serviceUpdateConfigToTerraform)(this._updateConfig),
    };
  }
}
