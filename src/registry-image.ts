// https://www.terraform.io/docs/providers/docker/r/registry_image.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, the verification of TLS certificates of the server/registry is disabled. Defaults to `false`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#insecure_skip_verify RegistryImage#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean;
  /**
  * If true, then the Docker image won't be deleted on destroy operation. If this is false, it will delete the image from the docker registry on destroy operation. Defaults to `false`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#keep_remotely RegistryImage#keep_remotely}
  */
  readonly keepRemotely?: boolean;
  /**
  * The name of the Docker image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#name RegistryImage#name}
  */
  readonly name: string;
  /**
  * build block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#build RegistryImage#build}
  */
  readonly buildAttribute?: RegistryImageBuild[];
}
export interface RegistryImageBuildAuthConfig {
  /**
  * the auth token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#auth RegistryImage#auth}
  */
  readonly auth?: string;
  /**
  * the user emal
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#email RegistryImage#email}
  */
  readonly email?: string;
  /**
  * hostname of the registry
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#host_name RegistryImage#host_name}
  */
  readonly hostName: string;
  /**
  * the identity token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#identity_token RegistryImage#identity_token}
  */
  readonly identityToken?: string;
  /**
  * the registry password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#password RegistryImage#password}
  */
  readonly password?: string;
  /**
  * the registry token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#registry_token RegistryImage#registry_token}
  */
  readonly registryToken?: string;
  /**
  * the server address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#server_address RegistryImage#server_address}
  */
  readonly serverAddress?: string;
  /**
  * the registry user name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#user_name RegistryImage#user_name}
  */
  readonly userName?: string;
}

function registryImageBuildAuthConfigToTerraform(struct?: RegistryImageBuildAuthConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    email: cdktf.stringToTerraform(struct!.email),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    identity_token: cdktf.stringToTerraform(struct!.identityToken),
    password: cdktf.stringToTerraform(struct!.password),
    registry_token: cdktf.stringToTerraform(struct!.registryToken),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

export interface RegistryImageBuildUlimit {
  /**
  * soft limit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#hard RegistryImage#hard}
  */
  readonly hard: number;
  /**
  * type of ulimit, e.g. `nofile`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#name RegistryImage#name}
  */
  readonly name: string;
  /**
  * hard limit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#soft RegistryImage#soft}
  */
  readonly soft: number;
}

function registryImageBuildUlimitToTerraform(struct?: RegistryImageBuildUlimit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hard: cdktf.numberToTerraform(struct!.hard),
    name: cdktf.stringToTerraform(struct!.name),
    soft: cdktf.numberToTerraform(struct!.soft),
  }
}

export interface RegistryImageBuild {
  /**
  * Pairs for build-time variables in the form TODO
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#build_args RegistryImage#build_args}
  */
  readonly buildArgs?: { [key: string]: string };
  /**
  * BuildID is an optional identifier that can be passed together with the build request. The 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#build_id RegistryImage#build_id}
  */
  readonly buildId?: string;
  /**
  * Images to consider as cache sources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#cache_from RegistryImage#cache_from}
  */
  readonly cacheFrom?: string[];
  /**
  * Optional parent cgroup for the container
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#cgroup_parent RegistryImage#cgroup_parent}
  */
  readonly cgroupParent?: string;
  /**
  * The absolute path to the context folder. You can use the helper function '${path.cwd}/context-dir'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#context RegistryImage#context}
  */
  readonly context: string;
  /**
  * The length of a CPU period in microseconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#cpu_period RegistryImage#cpu_period}
  */
  readonly cpuPeriod?: number;
  /**
  * Microseconds of CPU time that the container can get in a CPU period
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#cpu_quota RegistryImage#cpu_quota}
  */
  readonly cpuQuota?: number;
  /**
  * CPUs in which to allow execution (e.g., `0-3`, `0`, `1`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#cpu_set_cpus RegistryImage#cpu_set_cpus}
  */
  readonly cpuSetCpus?: string;
  /**
  * MEMs in which to allow execution (`0-3`, `0`, `1`)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#cpu_set_mems RegistryImage#cpu_set_mems}
  */
  readonly cpuSetMems?: string;
  /**
  * CPU shares (relative weight)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#cpu_shares RegistryImage#cpu_shares}
  */
  readonly cpuShares?: number;
  /**
  * Dockerfile file. Defaults to `Dockerfile`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#dockerfile RegistryImage#dockerfile}
  */
  readonly dockerfile?: string;
  /**
  * A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#extra_hosts RegistryImage#extra_hosts}
  */
  readonly extraHosts?: string[];
  /**
  * Always remove intermediate containers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#force_remove RegistryImage#force_remove}
  */
  readonly forceRemove?: boolean;
  /**
  * Isolation represents the isolation technology of a container. The supported values are 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#isolation RegistryImage#isolation}
  */
  readonly isolation?: string;
  /**
  * User-defined key/value metadata
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#labels RegistryImage#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Set memory limit for build
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#memory RegistryImage#memory}
  */
  readonly memory?: number;
  /**
  * Total memory (memory + swap), -1 to enable unlimited swap
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#memory_swap RegistryImage#memory_swap}
  */
  readonly memorySwap?: number;
  /**
  * Set the networking mode for the RUN instructions during build
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#network_mode RegistryImage#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Do not use the cache when building the image
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#no_cache RegistryImage#no_cache}
  */
  readonly noCache?: boolean;
  /**
  * Set platform if server is multi-platform capable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#platform RegistryImage#platform}
  */
  readonly platform?: string;
  /**
  * Attempt to pull the image even if an older image exists locally
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#pull_parent RegistryImage#pull_parent}
  */
  readonly pullParent?: boolean;
  /**
  * A Git repository URI or HTTP/HTTPS context URI
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#remote_context RegistryImage#remote_context}
  */
  readonly remoteContext?: string;
  /**
  * Remove intermediate containers after a successful build (default behavior)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#remove RegistryImage#remove}
  */
  readonly remove?: boolean;
  /**
  * The security options
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#security_opt RegistryImage#security_opt}
  */
  readonly securityOpt?: string[];
  /**
  * Set an ID for the build session
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#session_id RegistryImage#session_id}
  */
  readonly sessionId?: string;
  /**
  * Size of /dev/shm in bytes. The size must be greater than 0
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#shm_size RegistryImage#shm_size}
  */
  readonly shmSize?: number;
  /**
  * If true the new layers are squashed into a new image with a single new layer
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#squash RegistryImage#squash}
  */
  readonly squash?: boolean;
  /**
  * Suppress the build output and print image ID on success
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#suppress_output RegistryImage#suppress_output}
  */
  readonly suppressOutput?: boolean;
  /**
  * Set the target build stage to build
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#target RegistryImage#target}
  */
  readonly target?: string;
  /**
  * Version of the unerlying builder to use
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#version RegistryImage#version}
  */
  readonly version?: string;
  /**
  * auth_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#auth_config RegistryImage#auth_config}
  */
  readonly authConfig?: RegistryImageBuildAuthConfig[];
  /**
  * ulimit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html#ulimit RegistryImage#ulimit}
  */
  readonly ulimit?: RegistryImageBuildUlimit[];
}

function registryImageBuildToTerraform(struct?: RegistryImageBuild): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    build_args: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.buildArgs),
    build_id: cdktf.stringToTerraform(struct!.buildId),
    cache_from: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cacheFrom),
    cgroup_parent: cdktf.stringToTerraform(struct!.cgroupParent),
    context: cdktf.stringToTerraform(struct!.context),
    cpu_period: cdktf.numberToTerraform(struct!.cpuPeriod),
    cpu_quota: cdktf.numberToTerraform(struct!.cpuQuota),
    cpu_set_cpus: cdktf.stringToTerraform(struct!.cpuSetCpus),
    cpu_set_mems: cdktf.stringToTerraform(struct!.cpuSetMems),
    cpu_shares: cdktf.numberToTerraform(struct!.cpuShares),
    dockerfile: cdktf.stringToTerraform(struct!.dockerfile),
    extra_hosts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.extraHosts),
    force_remove: cdktf.booleanToTerraform(struct!.forceRemove),
    isolation: cdktf.stringToTerraform(struct!.isolation),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    memory: cdktf.numberToTerraform(struct!.memory),
    memory_swap: cdktf.numberToTerraform(struct!.memorySwap),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    no_cache: cdktf.booleanToTerraform(struct!.noCache),
    platform: cdktf.stringToTerraform(struct!.platform),
    pull_parent: cdktf.booleanToTerraform(struct!.pullParent),
    remote_context: cdktf.stringToTerraform(struct!.remoteContext),
    remove: cdktf.booleanToTerraform(struct!.remove),
    security_opt: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityOpt),
    session_id: cdktf.stringToTerraform(struct!.sessionId),
    shm_size: cdktf.numberToTerraform(struct!.shmSize),
    squash: cdktf.booleanToTerraform(struct!.squash),
    suppress_output: cdktf.booleanToTerraform(struct!.suppressOutput),
    target: cdktf.stringToTerraform(struct!.target),
    version: cdktf.stringToTerraform(struct!.version),
    auth_config: cdktf.listMapper(registryImageBuildAuthConfigToTerraform)(struct!.authConfig),
    ulimit: cdktf.listMapper(registryImageBuildUlimitToTerraform)(struct!.ulimit),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html docker_registry_image}
*/
export class RegistryImage extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/docker/r/registry_image.html docker_registry_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryImageConfig
  */
  public constructor(scope: Construct, id: string, config: RegistryImageConfig) {
    super(scope, id, {
      terraformResourceType: 'docker_registry_image',
      terraformGeneratorMetadata: {
        providerName: 'docker'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._insecureSkipVerify = config.insecureSkipVerify;
    this._keepRemotely = config.keepRemotely;
    this._name = config.name;
    this._build = config.buildAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean;
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean ) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify
  }

  // keep_remotely - computed: false, optional: true, required: false
  private _keepRemotely?: boolean;
  public get keepRemotely() {
    return this.getBooleanAttribute('keep_remotely');
  }
  public set keepRemotely(value: boolean ) {
    this._keepRemotely = value;
  }
  public resetKeepRemotely() {
    this._keepRemotely = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepRemotelyInput() {
    return this._keepRemotely
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

  // sha256_digest - computed: true, optional: false, required: false
  public get sha256Digest() {
    return this.getStringAttribute('sha256_digest');
  }

  // build - computed: false, optional: true, required: false
  private _build?: RegistryImageBuild[];
  public get buildAttribute() {
    return this.interpolationForAttribute('build') as any;
  }
  public set buildAttribute(value: RegistryImageBuild[] ) {
    this._build = value;
  }
  public resetBuildAttribute() {
    this._build = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      insecure_skip_verify: cdktf.booleanToTerraform(this._insecureSkipVerify),
      keep_remotely: cdktf.booleanToTerraform(this._keepRemotely),
      name: cdktf.stringToTerraform(this._name),
      build: cdktf.listMapper(registryImageBuildToTerraform)(this._build),
    };
  }
}
